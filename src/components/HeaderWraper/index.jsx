import { useState, useEffect } from 'react'
import { HeaderMobile } from '../HeaderMobile'
import { HeaderDesktop} from '../HeaderDesktop'


export function HeaderWraper(){

    const [ isMobile, setIsMobile ] = useState(window.innerWidth < 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768)
    }

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    window.addEventListener('resize', handleResize)
    return(
        <>
        {isMobile ? ( <HeaderMobile className="Mobile"/> )
        : (
            <HeaderDesktop className="Desktop"/>
        )}
        </>
    )
}