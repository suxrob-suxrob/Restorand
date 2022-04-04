import React from "react";
import { Link,useMatch } from "react-router-dom";

const CostumLink = ({children,to, ...props}) => {
    const match = useMatch(to);

    return (
        <Link  to={to}
        style={{
            color: match ? 'var(--color-active)': 'rgba(255, 255, 255, 0.413)',
        }}
        {...props}
        >
            {children}
        </Link>  
    )

}
export default CostumLink;