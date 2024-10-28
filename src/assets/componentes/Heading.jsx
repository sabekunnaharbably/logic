import React from 'react'

const Heading = ({ className, text }) => {
    // console.log();
    text.split(" ").map(item => {
        // console.log(item);
        // console.log(item.includes("#"));
        // if (item.includes("#")) {
        //     console.log(item);
            
        // }

        if (item.includes("#")) {

            let arr = item.split("")
            arr.pop()
            arr.shift()
            console.log(arr.join(""));
            

            
        }




    })

    return (
        <h1 className={`${className}`}>{text}</h1>
    )
}

export default Heading