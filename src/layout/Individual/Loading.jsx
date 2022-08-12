import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (

    < ContentLoader
        speed={3}
        width={300}
        height={200}
        viewBox="0 0 300 200"
        backgroundColor="#dedede"
        foregroundColor="#b0b0b0"
        {...props}
    >
        <rect x="0" y="0" rx="5" ry="5" width="300" height="200" />
    </ContentLoader >
)


export default MyLoader