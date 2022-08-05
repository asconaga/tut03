import { useEffect, useState } from 'react'

const useScrollPercent = () => {
    const [scrollPercent, setScrollPercent] = useState(0)

    useEffect(() => {
        const handleScroll = e => {
            let elementScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrollPos = (elementScroll / windowHeight) * 100;

            setScrollPercent(scrollPos);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return scrollPercent;
}
export default useScrollPercent
