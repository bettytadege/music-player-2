import React, { useState } from 'react'
import profile from '../../assets/photo_2024-06-24_10-29-20.jpg'
import { IoMdMenu } from 'react-icons/io';
import { usePlayerContext } from '../../context/PlayerContext';


function Profile({setIsShow}) {
  const{ShowMenu}=usePlayerContext()
  // const handleShow=()=>{
  //   console.log('object')
  //   setIsShow(true);
  // }

  return (
    <>
      <div className=" ">
        <div className="lg:hidden md:hidden block mx-3" onClick={ShowMenu} >
      <IoMdMenu size={50}/>
      </div>
     
      <div className=" hidden md:flex gap-x-4 items-center  border w-[100%] rounded-full border-[#333333] bg-[#0D0D0D] pl-3">
        <div className="">
          <svg
            width="25"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.40053 5.1825C10.3654 5.10546 11.2814 4.72595 12.018 4.098C12.85 3.38939 13.9072 3.00021 15 3.00021C16.0929 3.00021 17.15 3.38939 17.982 4.098C18.7187 4.72595 19.6346 5.10546 20.5995 5.1825C21.6892 5.26959 22.7122 5.74195 23.4851 6.5149C24.2581 7.28786 24.7304 8.31086 24.8175 9.4005C24.894 10.365 25.2735 11.2815 25.902 12.018C26.6106 12.85 26.9998 13.9071 26.9998 15C26.9998 16.0929 26.6106 17.15 25.902 17.982C25.2741 18.7186 24.8946 19.6346 24.8175 20.5995C24.7304 21.6891 24.2581 22.7122 23.4851 23.4851C22.7122 24.2581 21.6892 24.7304 20.5995 24.8175C19.6346 24.8945 18.7187 25.2741 17.982 25.902C17.15 26.6106 16.0929 26.9998 15 26.9998C13.9072 26.9998 12.85 26.6106 12.018 25.902C11.2814 25.2741 10.3654 24.8945 9.40053 24.8175C8.31089 24.7304 7.28789 24.2581 6.51493 23.4851C5.74198 22.7122 5.26962 21.6891 5.18253 20.5995C5.1055 19.6346 4.72598 18.7186 4.09803 17.982C3.38942 17.15 3.00024 16.0929 3.00024 15C3.00024 13.9071 3.38942 12.85 4.09803 12.018C4.72598 11.2814 5.1055 10.3654 5.18253 9.4005C5.26962 8.31086 5.74198 7.28786 6.51493 6.5149C7.28789 5.74195 8.31089 5.26959 9.40053 5.1825ZM20.5605 13.0605C20.8338 12.7776 20.985 12.3987 20.9815 12.0054C20.9781 11.6121 20.8204 11.2359 20.5423 10.9578C20.2641 10.6797 19.8879 10.5219 19.4946 10.5185C19.1013 10.5151 18.7224 10.6663 18.4395 10.9395L13.5 15.879L11.5605 13.9395C11.2776 13.6663 10.8987 13.5151 10.5054 13.5185C10.1121 13.5219 9.73592 13.6797 9.45781 13.9578C9.17969 14.2359 9.02194 14.6121 9.01852 15.0054C9.0151 15.3987 9.1663 15.7776 9.43953 16.0605L12.4395 19.0605C12.7208 19.3417 13.1023 19.4997 13.5 19.4997C13.8978 19.4997 14.2792 19.3417 14.5605 19.0605L20.5605 13.0605Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="">
          <svg
            width="25"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80653 4.5 9 4.5H24C24.2786 4.5 24.5516 4.57757 24.7886 4.72402C25.0256 4.87048 25.2171 5.08002 25.3416 5.32918C25.4662 5.57834 25.519 5.85727 25.4939 6.13471C25.4689 6.41215 25.3671 6.67715 25.2 6.9L21.375 12L25.2 17.1C25.3671 17.3229 25.4689 17.5878 25.4939 17.8653C25.519 18.1427 25.4662 18.4217 25.3416 18.6708C25.2171 18.92 25.0256 19.1295 24.7886 19.276C24.5516 19.4224 24.2786 19.5 24 19.5H9C8.60217 19.5 8.22064 19.658 7.93934 19.9393C7.65804 20.2206 7.5 20.6022 7.5 21V25.5C7.5 25.8978 7.34196 26.2794 7.06066 26.5607C6.77936 26.842 6.39782 27 6 27C5.60218 27 5.22064 26.842 4.93934 26.5607C4.65804 26.2794 4.5 25.8978 4.5 25.5V9Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="">
          <svg
            width="25"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.2351 4.755C16.6651 2.415 13.3351 2.415 12.7651 4.755C12.68 5.10662 12.5131 5.43319 12.2779 5.70812C12.0428 5.98305 11.7461 6.19857 11.4119 6.33716C11.0777 6.47574 10.7155 6.53346 10.3548 6.50563C9.99412 6.4778 9.64508 6.36521 9.33611 6.177C7.27811 4.923 4.92311 7.278 6.17711 9.336C6.98711 10.665 6.26861 12.399 4.75661 12.7665C2.41511 13.335 2.41511 16.6665 4.75661 17.2335C5.10833 17.3187 5.43495 17.4858 5.70988 17.7211C5.98481 17.9564 6.20027 18.2534 6.33872 18.5877C6.47717 18.9221 6.5347 19.2844 6.50662 19.6452C6.47853 20.006 6.36563 20.3551 6.17711 20.664C4.92311 22.722 7.27811 25.077 9.33611 23.823C9.64502 23.6345 9.99409 23.5216 10.3549 23.4935C10.7157 23.4654 11.078 23.5229 11.4124 23.6614C11.7467 23.7998 12.0437 24.0153 12.279 24.2902C12.5143 24.5652 12.6814 24.8918 12.7666 25.2435C13.3351 27.585 16.6666 27.585 17.2336 25.2435C17.3191 24.892 17.4863 24.5656 17.7217 24.2908C17.9571 24.0161 18.254 23.8008 18.5882 23.6624C18.9225 23.5239 19.2847 23.4664 19.6454 23.4943C20.0061 23.5222 20.3551 23.6348 20.6641 23.823C22.7221 25.077 25.0771 22.722 23.8231 20.664C23.6349 20.355 23.5223 20.006 23.4944 19.6453C23.4665 19.2846 23.5241 18.9224 23.6625 18.5881C23.8009 18.2539 24.0162 17.957 24.2909 17.7216C24.5657 17.4862 24.8921 17.319 25.2436 17.2335C27.5851 16.665 27.5851 13.3335 25.2436 12.7665C24.8919 12.6813 24.5653 12.5142 24.2903 12.2789C24.0154 12.0436 23.8 11.7466 23.6615 11.4123C23.5231 11.0779 23.4655 10.7156 23.4936 10.3548C23.5217 9.99398 23.6346 9.64491 23.8231 9.336C25.0771 7.278 22.7221 4.923 20.6641 6.177C20.3552 6.36552 20.0061 6.47842 19.6453 6.5065C19.2845 6.53459 18.9222 6.47706 18.5878 6.33861C18.2535 6.20016 17.9566 5.9847 17.7212 5.70977C17.4859 5.43484 17.3188 5.10822 17.2336 4.7565L17.2351 4.755ZM15.0001 19.5C16.1936 19.5 17.3382 19.0259 18.1821 18.182C19.026 17.3381 19.5001 16.1935 19.5001 15C19.5001 13.8065 19.026 12.6619 18.1821 11.818C17.3382 10.9741 16.1936 10.5 15.0001 10.5C13.8066 10.5 12.662 10.9741 11.8181 11.818C10.9742 12.6619 10.5001 13.8065 10.5001 15C10.5001 16.1935 10.9742 17.3381 11.8181 18.182C12.662 19.0259 13.8066 19.5 15.0001 19.5Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="">
          <svg
            width="25"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9999 3C12.613 3 10.3238 3.94821 8.63596 5.63604C6.94814 7.32387 5.99992 9.61305 5.99992 12V17.379L4.93942 18.4395C4.72971 18.6493 4.5869 18.9165 4.52905 19.2075C4.4712 19.4984 4.5009 19.7999 4.61441 20.074C4.72791 20.348 4.92012 20.5823 5.16674 20.7471C5.41335 20.9119 5.7033 20.9999 5.99992 21H23.9999C24.2966 20.9999 24.5865 20.9119 24.8331 20.7471C25.0797 20.5823 25.2719 20.348 25.3854 20.074C25.4989 19.7999 25.5287 19.4984 25.4708 19.2075C25.4129 18.9165 25.2701 18.6493 25.0604 18.4395L23.9999 17.379V12C23.9999 9.61305 23.0517 7.32387 21.3639 5.63604C19.6761 3.94821 17.3869 3 14.9999 3ZM14.9999 27C13.8064 27 12.6619 26.5259 11.8179 25.682C10.974 24.8381 10.4999 23.6935 10.4999 22.5H19.4999C19.4999 23.6935 19.0258 24.8381 18.1819 25.682C17.338 26.5259 16.1934 27 14.9999 27Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="">
          <img src={profile} alt="" className="rounded-full w-14 h-14"/>
        </div>
      </div>
      </div>

      
    </>
  );
}

export default Profile