import { NextRequest, NextResponse } from "next/server";
import UserSchema from "../schema";
import { prisma } from "../../../lib/prisma";
interface RouteParams {
    id: string;
}
export async function GET(
    request: NextRequest,
    { params }: { params: Promise<RouteParams> }
) {
    const resolvedParams = await params;
    const users = await prisma.user.findUnique({
        where: {
            id: resolvedParams.id,
        },
    });

    if (!users)
        return NextResponse.json({ message: "User not found" }, { status: 404 });

    return NextResponse.json(users);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<RouteParams> }
) {
    const resolvedParams = await params;
    const id = resolvedParams.id
    const body = await request.json();
    const validation = UserSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json({ message: "Name is required" }, { status: 400 });

    const user = await prisma.user.findUnique({
        where: { id: id },
    });
    if (!user)
        return NextResponse.json({ message: "User not found" }, { status: 404 });

    const updatedUser = await prisma.user.update({
        where: { id: id },
        data: {
            name: body.name,
            email: body.email,
        },
    });
    console.log(updatedUser);

    return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<RouteParams> }
) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const user = await prisma.user.findUnique({ where: { id: id } });

    if (!user)
        return NextResponse.json({ message: "User not found" }, { status: 404 });

    await prisma.user.delete({ where: { id: id } });

    return NextResponse.json(
        { message: `the user ${user.name} is deleted` },
        { status: 200 }
    );
}
