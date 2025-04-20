import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
className,
  title,
  description,
  header,
  icon,
  id,
  img,
  link,

  
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  link?: string;

}) => {
  return (
    
    
    <div
    
      className={cn(
        "group/bento relative shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
       <a href={link} target="_blank">
      {title}
      <div className="">
          <img src={img} alt='' />
          
        
         
        </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
      
      
       
       
      </div>
      </a>
    </div>
    
  );
};
