import { NextResponse, NextRequest } from 'next/server';
import UserSchema from './schema';

export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Leanne Graham', },
        { id: 2, name: 'Ervin Howell', },
        { id: 3, name: 'Clementine Bauch', },
    ]);
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