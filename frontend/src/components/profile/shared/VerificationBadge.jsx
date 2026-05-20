import React from 'react'
import {
    FiCheckCircle,
    FiAlertCircle
}
from 'react-icons/fi';

const VerificationBadge = ({

    user,
    onApply

}) => {

    return (

        <div
            className="
flex
items-center
gap-2
mt-2
text-sm
cursor-pointer
"
        >

        {

            user?.isVerified ?

            <div
            className="
flex
items-center
gap-2
text-blue-500
font-medium
"
            >

                <FiCheckCircle/>

                <span>

                    Verified

                </span>

            </div>

            :

            <div
            onClick={()=>onApply?.()}
            className="
flex
items-center
gap-2
text-gray-500
font-medium
hover:text-cyan-600
"
            >

                <FiAlertCircle/>

                <span>

                    Not Verified

                </span>

            </div>

        }

        </div>

    )

}

export default VerificationBadge