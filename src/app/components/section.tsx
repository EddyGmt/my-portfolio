import { PropsWithChildren } from "react";
import {cn} from "@/lib/utils"

const Section = (props: PropsWithChildren<{className?:string, id?:string}>) =>{
    return(
        <section className={cn("px-4 m-auto", props.className)}>
            {props.children}        
        </section>
    );
}

export default Section;