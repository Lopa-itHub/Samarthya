import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const DeleteAccount = () => {

  const [
    showPopup,
    setShowPopup
  ] = useState(false);


  const handleDeactivate =
  async()=>{

    try{

      await axios.put(

        "http://localhost:3000/api/auth/deactivate",

        {},

        {

          headers:{

            Authorization:

            `Bearer ${
              localStorage.getItem(
                "token"
              )
            }`

          }

        }

      );

      toast.success(
        "Account deactivated"
      );

      localStorage.clear();

      window.location.href="/";

    }

    catch(err){

      toast.error(

        err.response?.data?.message ||

        "Something went wrong"

      );

    }

  }


  return (

    <div className="
    flex
    flex-col
    gap-6
    ">

      <h2 className="
      text-2xl
      font-bold
      text-red-600
      ">

        Deactivate Account

      </h2>


      <p className="
      text-gray-600
      leading-7
      ">

        Deactivating your account will temporarily disable access to your profile and services.

        Your account and data can be restored within <span className="font-semibold">30 days</span>.

        After this period, your account may be permanently removed.

      </p>


      <button

        onClick={()=>setShowPopup(true)}

        className="
        bg-red-600
        text-white
        px-5
        py-3
        rounded-lg
        hover:bg-red-700
        transition
        w-fit
        "

      >

        Deactivate Account

      </button>



      {

      showPopup &&

      <div className="
      fixed
      inset-0
      bg-black/50
      z-50
      flex
      items-center
      justify-center
      ">

        <div className="
        bg-white
        rounded-xl
        p-8
        w-[420px]
        shadow-xl
        ">

          <h2 className="
          text-xl
          font-bold
          mb-4
          ">

            Confirm Account Deactivation

          </h2>


          <p className="
          text-gray-600
          mb-6
          leading-7
          ">

            Are you sure you want to deactivate your account?

            Your profile and access will be disabled immediately.

            You can restore your account within <span className="font-semibold">30 days</span> by logging back in.

            After the restoration period expires, your account data may be permanently removed.

          </p>


          <div className="
          flex
          justify-end
          gap-3
          ">

            <button

            onClick={()=>
            setShowPopup(false)
            }

            className="
            border
            px-4
            py-2
            rounded
            "

            >

              Cancel

            </button>


            <button

            onClick={
              handleDeactivate
            }

            className="
            bg-red-600
            text-white
            px-4
            py-2
            rounded
            "

            >

              Confirm

            </button>

          </div>

        </div>

      </div>

      }

    </div>

  );

};

export default DeleteAccount;