import {NextApiRequest } from "next";
import { Resend } from 'resend';
import {EmailTemplate} from '../../components/emailTemplate';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY) 

export async function POST(req: NextApiRequest){
    try{
        const { name, email, message } = await req.json();
        
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['eddygomet@gmail.com'],
            subject: 'Nouveau message depuis ton portfolio',
            react: EmailTemplate({ name, email, message}),
          });
        
          if(error) throw error;
          return NextResponse.json({ success: true, data });
    }catch(error){
        return NextResponse.json({ success: false, error }, { status: 500 });
    }
}