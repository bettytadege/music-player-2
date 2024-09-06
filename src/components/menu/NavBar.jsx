import React, { useState } from 'react'

function LeftBar() {
  const[active,setActive]=useState(null)
  const handleClick=(icon)=>{
    setActive(icon)
  }
  return (
    <>
      <div className="bg-black w-[6%] pt-6">
        <div className="">
          <div className="flex flex-col gap-y-10 items-center">
            <div className="md:flex flex-col gap-y-10 hidden">
              <div>
              <svg
                width="30"
                height="30"
                viewBox="0 0 31 30"
                className={`${active === 'home'? 'fill-white':'fill-[#333333]'}`} 
                onClick={()=>handleClick('home')}
                xmlns="http://www.w3.org/2000/svg"

              >
                <path
                  d="M16.8851 3.24497C16.5107 2.91252 16.0151 2.72728 15.5 2.72728C14.9848 2.72728 14.4892 2.91252 14.1149 3.24497L4.34876 11.9154C4.04973 12.1812 3.81163 12.5016 3.64904 12.8569C3.48645 13.2122 3.40279 13.595 3.4032 13.9817V24.531C3.40373 25.2841 3.72259 26.0062 4.28968 26.5386C4.85677 27.0709 5.62568 27.37 6.42739 27.37H9.45159C10.2537 27.37 12.4758 27.3485 12.4758 27.3485C12.4758 27.3485 12.4758 25.2825 12.4758 24.5291V19.7942C12.4758 19.5431 12.582 19.3022 12.771 19.1246C12.9601 18.947 13.2165 18.8472 13.4838 18.8472H17.5161C17.7835 18.8472 18.0399 18.947 18.2289 19.1246C18.418 19.3022 18.5242 19.5431 18.5242 19.7942V24.5291C18.5242 25.2825 18.5242 27.3485 18.5242 27.3485C18.5242 27.3485 20.7463 27.37 21.5484 27.37H24.5726C25.3746 27.37 26.1438 27.0707 26.711 26.5379C27.2781 26.0051 27.5967 25.2825 27.5967 24.5291V13.9798C27.5966 13.5933 27.5125 13.2108 27.3496 12.8558C27.1866 12.5009 26.9483 12.1809 26.6492 11.9154L16.8851 3.24119V3.24497Z"
                  
                />
              </svg>
              </div>
              <div className="">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  className={`${active === 'compass'? 'fill-white':'fill-[#333333]'}`} 
                onClick={()=>handleClick('compass')}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.5 28.5C22.9558 28.5 29 22.4558 29 15C29 7.54416 22.9558 1.5 15.5 1.5C8.04416 1.5 2 7.54416 2 15C2 22.4558 8.04416 28.5 15.5 28.5ZM15.9772 11.1794C18.7052 9.85514 20.0692 9.19301 20.7876 9.6837C20.9418 9.789 21.075 9.92216 21.1803 10.0763C21.6709 10.7947 21.0088 12.1587 19.6846 14.8867L19.6846 14.8867C18.9765 16.3454 18.6225 17.0747 18.011 17.2705C17.8744 17.3143 17.7321 17.3382 17.5887 17.3416C17.5035 17.3436 17.4195 17.3353 17.3352 17.3166C17.064 17.8297 16.3414 18.1805 15.0228 18.8206C12.2948 20.1449 10.9308 20.807 10.2124 20.3163C10.0582 20.211 9.92504 20.0778 9.81974 19.9237C9.32905 19.2053 9.99118 17.8413 11.3154 15.1133C12.0235 13.6546 12.3775 12.9253 12.989 12.7295C13.1256 12.6857 13.2679 12.6618 13.4113 12.6584C13.4965 12.6564 13.5805 12.6647 13.6648 12.6834C13.936 12.1703 14.6586 11.8195 15.9772 11.1794Z"
                    
                  />
                </svg>
              </div>
              <div >
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${active === 'mic'? 'fill-white':'fill-[#333333]'}`} 
                   onClick={()=>handleClick('mic')}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 6C11 4.80653 11.4741 3.66193 12.318 2.81802C13.1619 1.97411 14.3065 1.5 15.5 1.5C16.6935 1.5 17.8381 1.97411 18.682 2.81802C19.5259 3.66193 20 4.80653 20 6V12C20 13.1935 19.5259 14.3381 18.682 15.182C17.8381 16.0259 16.6935 16.5 15.5 16.5C14.3065 16.5 13.1619 16.0259 12.318 15.182C11.4741 14.3381 11 13.1935 11 12V6ZM17 22.395C19.4993 22.0339 21.7848 20.7844 23.4378 18.8752C25.0907 16.9661 26.0003 14.5253 26 12C26 11.6022 25.842 11.2206 25.5607 10.9393C25.2794 10.658 24.8978 10.5 24.5 10.5C24.1022 10.5 23.7206 10.658 23.4393 10.9393C23.158 11.2206 23 11.6022 23 12C23 13.9891 22.2098 15.8968 20.8033 17.3033C19.3968 18.7098 17.4891 19.5 15.5 19.5C13.5109 19.5 11.6032 18.7098 10.1967 17.3033C8.79018 15.8968 8 13.9891 8 12C8 11.6022 7.84196 11.2206 7.56066 10.9393C7.27936 10.658 6.89782 10.5 6.5 10.5C6.10218 10.5 5.72064 10.658 5.43934 10.9393C5.15804 11.2206 5 11.6022 5 12C4.99966 14.5253 5.9093 16.9661 7.56223 18.8752C9.21516 20.7844 11.5007 22.0339 14 22.395V23.25V24V24.75V25.5C14 25.5 14 25.5 14 26.25C14 27.75 17 27.75 17 26.25C17 25.5 17 25.5 17 25.5V24.75C17 24.75 17 24 17 23.25C17 22.5 17 22.395 17 22.395Z"
                    
                  />
                </svg>
              </div>
              <div className="">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  className={`${active === 'library'? 'fill-white':'fill-[#333333]'}`} 
                onClick={()=>handleClick('library')}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 4.5C10.6022 4.5 10.2206 4.65804 9.93934 4.93934C9.65804 5.22064 9.5 5.60218 9.5 6C9.5 6.39782 9.65804 6.77936 9.93934 7.06066C10.2206 7.34196 10.6022 7.5 11 7.5H20C20.3978 7.5 20.7794 7.34196 21.0607 7.06066C21.342 6.77936 21.5 6.39782 21.5 6C21.5 5.60218 21.342 5.22064 21.0607 4.93934C20.7794 4.65804 20.3978 4.5 20 4.5H11ZM6.5 10.5C6.5 10.1022 6.65804 9.72064 6.93934 9.43934C7.22064 9.15804 7.60218 9 8 9H23C23.3978 9 23.7794 9.15804 24.0607 9.43934C24.342 9.72064 24.5 10.1022 24.5 10.5C24.5 10.8978 24.342 11.2794 24.0607 11.5607C23.7794 11.842 23.3978 12 23 12H8C7.60218 12 7.22064 11.842 6.93934 11.5607C6.65804 11.2794 6.5 10.8978 6.5 10.5ZM3.5 16.5C3.5 15.7044 3.81607 14.9413 4.37868 14.3787C4.94129 13.8161 5.70435 13.5 6.5 13.5H24.5C25.2956 13.5 26.0587 13.8161 26.6213 14.3787C27.1839 14.9413 27.5 15.7044 27.5 16.5V22.5C27.5 23.2956 27.1839 24.0587 26.6213 24.6213C26.0587 25.1839 25.2956 25.5 24.5 25.5H6.5C5.70435 25.5 4.94129 25.1839 4.37868 24.6213C3.81607 24.0587 3.5 23.2956 3.5 22.5V16.5Z"
                  
                  />
                </svg>
              </div>
              <div className="">
                <svg
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  className={`${active === 'heart'? 'fill-white':'fill-[#333333]'}`} 
                  onClick={()=>handleClick('heart')}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.258 7.758C6.38317 6.63317 7.90902 6.00128 9.5 6.00128C11.091 6.00128 12.6168 6.63317 13.742 7.758L15.5 9.5145L17.258 7.758C17.8115 7.18494 18.4735 6.72784 19.2056 6.41339C19.9376 6.09894 20.7249 5.93342 21.5216 5.9265C22.3183 5.91957 23.1083 6.07138 23.8457 6.37307C24.5831 6.67475 25.253 7.12027 25.8164 7.68363C26.3797 8.24698 26.8252 8.9169 27.1269 9.65427C27.4286 10.3917 27.5804 11.1817 27.5735 11.9784C27.5666 12.7751 27.4011 13.5624 27.0866 14.2944C26.7722 15.0265 26.3151 15.6885 25.742 16.242L15.5 26.4855L5.258 16.242C4.13317 15.1168 3.50128 13.591 3.50128 12C3.50128 10.409 4.13317 8.88316 5.258 7.758Z"
                    
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftBar