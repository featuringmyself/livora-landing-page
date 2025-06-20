import dashboardPreview from "@/../public/dashboardPreview.png"
import { useFadeInUp, useSlideInLeft, useSlideInRight, useStaggerFromRight } from "@/hooks/useGSAP";

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 6.88086H13M15 4.88086V8.88086M17 16.3809H13M17 13.3809H13M9 16.3809L7.25 14.6309M7.25 14.6309L5.5 12.8809M7.25 14.6309L9 12.8809M7.25 14.6309L5.5 16.3809M9 6.88086H5M20.5 11.8309V9.93086C20.5 5.90086 20.5 3.88486 19.109 2.63286C17.718 1.38086 15.479 1.38086 11 1.38086C6.522 1.38086 4.282 1.38086 2.891 2.63286C1.5 3.88486 1.5 5.90086 1.5 9.93086V11.8309C1.5 15.8609 1.5 17.8769 2.891 19.1289C4.282 20.3809 6.521 20.3809 11 20.3809C15.478 20.3809 17.718 20.3809 19.109 19.1289C20.5 17.8769 20.5 15.8609 20.5 11.8309Z" stroke="#77A811" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ),
    title: "Real-time calorie & macro tracking"
  },
  {
    icon: (
      <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0.880859C9.61305 0.880859 7.32387 1.82907 5.63604 3.5169C3.94821 5.20473 3 7.49391 3 9.88086H0L3.89 13.7709L3.96 13.9109L8 9.88086H5C5 6.01086 8.13 2.88086 12 2.88086C15.87 2.88086 19 6.01086 19 9.88086C19 13.7509 15.87 16.8809 12 16.8809C10.07 16.8809 8.32 16.0909 7.06 14.8209L5.64 16.2409C6.47328 17.0791 7.46433 17.7439 8.55594 18.197C9.64754 18.6501 10.8181 18.8826 12 18.8809C14.3869 18.8809 16.6761 17.9326 18.364 16.2448C20.0518 14.557 21 12.2678 21 9.88086C21 7.49391 20.0518 5.20473 18.364 3.5169C16.6761 1.82907 14.3869 0.880859 12 0.880859ZM11 5.88086V10.8809L15.28 13.4209L16 12.2109L12.5 10.1309V5.88086H11Z" fill="#77A811"/>
      </svg>
      
    ),
    title: "Meal history & progress tracking"
  },
  {
    icon: (
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 7.88086H21M8 1.88086V3.88086M13 0.880859V3.88086M18 1.88086V3.88086M20 15.8809V7.88086H6V15.8809C6 16.6765 6.31607 17.4396 6.87868 18.0022C7.44129 18.5648 8.20435 18.8809 9 18.8809H17C17.7956 18.8809 18.5587 18.5648 19.1213 18.0022C19.6839 17.4396 20 16.6765 20 15.8809Z" stroke="#77A811" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ),
    title: "Customized meal plans based on goals"
  },
  {
    icon: (
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6.38086C4 6.38086 1.4285 7.38086 1 10.8809M18 6.38086C18 6.38086 20.5715 7.38086 21 10.8809M8 6.38086C8 6.38086 10.4 6.96436 11 9.88086C11.6 6.96436 14 6.38086 14 6.38086M9 13.8809C9 13.8809 6.9 14.2559 6 16.8809M13 13.8809C13 13.8809 15.1 14.2559 16 16.8809" stroke="#77A811" strokeWidth="1.6" strokeLinecap="round"/>
<path d="M11 14.8809C12.3807 14.8809 13.5 13.7616 13.5 12.3809C13.5 11.0001 12.3807 9.88086 11 9.88086C9.61929 9.88086 8.5 11.0001 8.5 12.3809C8.5 13.7616 9.61929 14.8809 11 14.8809Z" stroke="#77A811" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 6.88086C17.6569 6.88086 19 5.53771 19 3.88086C19 2.22401 17.6569 0.880859 16 0.880859C14.3431 0.880859 13 2.22401 13 3.88086C13 5.53771 14.3431 6.88086 16 6.88086Z" stroke="#77A811" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 6.88086C7.65685 6.88086 9 5.53771 9 3.88086C9 2.22401 7.65685 0.880859 6 0.880859C4.34315 0.880859 3 2.22401 3 3.88086C3 5.53771 4.34315 6.88086 6 6.88086Z" stroke="#77A811" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ),
    title: "Multi-user support for family meal plans"
  }
];

function DashboardPreview() {
  const headerRef = useFadeInUp(0);
  const imageWrapperRef = useSlideInLeft(0.3);
  const featuresRef = useStaggerFromRight({ stagger: 0.2 });

  return (
    <div className="flex flex-col justify-center items-center my-10 bg-white/5 dark:bg-[#373636]/5 md:p-8 p-4 rounded-2xl shadow-xl">
      <h1 ref={headerRef} className="text-black dark:text-white font-semibold md:text-4xl text-lg">Track Your Health Like Never Before</h1>
      <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-evenly w-full items-center gap-12">
        <div ref={imageWrapperRef}>
          <img 
            src={dashboardPreview} 
            alt="Preview of customer dashboard" 
            className="shadow-2xl rounded-3xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-shadow duration-300 md:w-3/4 w-full"
          />
        </div>
        <div ref={featuresRef} className="flex flex-col gap-6 justify-items-start items-start md:w-[550px] w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-start gap-4 bg-white/5 dark:bg-[#373636] hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl shadow-md w-full min-h-[80px]">
              <div className="dark:bg-[#484848] bg-[#F6F6F6] text-[#77A811] p-2 rounded-lg">
                {feature.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-black dark:text-white">{feature.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPreview