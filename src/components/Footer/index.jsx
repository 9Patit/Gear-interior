const Footer = () => {
  return (
    <div className="w-full bg-[#F7F7F7] pt-[120px] lg:px-[150px] px-8 pb-[56px] mt-[120px]">
      <div className="w-full flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-8">
        <div className="flex flex-col gap-7">
          <span className="font-semibold text-[#333] text-[28px]">
            Interior.
          </span>
          <p className="font-medium text-[#333] text-[15px] max-w-[300px] leading-7">
            โปรเจกต์นี้เป็นส่วนหนึ่งของการศึกษา <br /> นักพัฒนา: [ พาทิศ
            สุดสัตย์] <br />
            ช่องทางการติดต่อ: <br />  patit.sudsat@gmail.com <br /> FB: พาทิศ สุดสัตย์ {" "}
            <br />
            
            คุณสามารถติดต่อผู้พัฒนาได้ <br />หากมีข้อสงสัยหรือต้องการคำแนะนำใดๆ 
          </p>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
          <span className="font-medium text-[#425e85] text-[17px] mb-5">
            Services
          </span>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Interior Design
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            House Design
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px]">
            Outdoor Solutions
          </a>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
          <span className="font-medium text-[#425e85] text-[17px] mb-5">
            Collections
          </span>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Classic
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Luxury
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px]">
            Surreal
          </a>
        </div>
        <div className="flex flex-col md:mb-0 mb-5">
          <span className="font-medium text-[#425e85] text-[17px] mb-5">
            Follow us
          </span>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Facebook
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px] mb-4">
            Twitter
          </a>
          <a href="#" className="text-[#333] font-medium text-[15px]">
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
