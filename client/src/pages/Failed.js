import { useLocation } from "react-router-dom"

const Failed = () => {
    const location = useLocation();

    console.log('location', location);
    return (
        <div>Payment Failed</div>
    )
}

export {Failed}