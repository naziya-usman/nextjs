import { NextRequest, NextResponse } from "next/server";
import UserSchema from "../schema";
import { prisma } from '../../../lib/prisma';
interface RouteParams {
    id: string;
}
export async function GET(request: NextRequest, { params }: { params: Promise<RouteParams> }) {
const resolvedParams = await params;
const users= await prisma.user.findUnique({
    where: {
        id: parseInt(resolvedParams.id),
    },
});

    if (!users)
        return NextResponse.json({ message: 'User not found' }, { status: 404 });

    return NextResponse.json(users);
}

export async function PUT(request: NextRequest, { params }: { params: Promise<RouteParams> }) {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);
    const body = await request.json();
    try {
        UserSchema.parse(body);
    } catch (error) {
        return NextResponse.json({ message: 'Name is required' }, { status: 400 });
    }
    if (id > 10)
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
    return NextResponse.json({ id: id, name: body.name }, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<RouteParams> }) {
    const resolvedParams = await params;
    const id = parseInt(resolvedParams.id);

    if (id > 10)
        return NextResponse.json({ message: 'User not found' }, { status: 404 });

    return NextResponse.json({ message: `User with id ${id} deleted` }, { status: 200 });
}
