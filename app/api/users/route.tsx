import { NextResponse, NextRequest } from 'next/server';
import UserSchema from './schema';
import { prisma } from '../../lib/prisma';

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();

    return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = UserSchema.safeParse(body);

    if (!validation.success)
        return NextResponse.json({ message: 'Name is required' }, { status: 400 });
    const user = await prisma.user.findUnique({
        where: { email: body.email }
    })
    if (user)
        return NextResponse.json({ message: 'Email already exists' }, { status: 400 });

    const newUser = await prisma.user.create({
        data: { name: body.name, email: body.email }
    });
    return NextResponse.json(newUser, { status: 201 });
}
