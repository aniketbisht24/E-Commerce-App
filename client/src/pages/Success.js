import { useLocation } from "react-router-dom"

const Success = () => {
    const location = useLocation();

    console.log('location', location);
    return (
        <div>Successfull</div>
    )
}

export default Success