import { connectToDatabase } from '@/lib/db';
import User from '@/Models/User';

export async function POST(req) {
    const { email, cart } = await req.json();
  
    try {
      await connectToDatabase();
      let user = await User.findOne({ email });
      
      user.cart = cart;
      await user.save();
      
      return new Response(JSON.stringify({ message: 'cart updated' }),
      { status: 200 }
    );
    } catch (error) {
      console.log(error);
      return new Response(JSON.stringify({ message: 'Server error' }), {
        status: 500,
      });
    }
  }
  