import { NextResponse, NextRequest } from 'next/server';
import UserSchema from './schema';
import { prisma } from '../../lib/prisma';

export async function GET(request: NextRequest) {
const users = await prisma.user.findMany();

    return NextResponse.json(users);
}
export async function POST(request: NextRequest) {
    const body = await request.json();
    try {
        UserSchema.parse(body);
    } catch (error) {
        return NextResponse.json({ message: 'Name is required' }, { status: 400 });
    }
    return NextResponse.json(body, { status: 201 });
}