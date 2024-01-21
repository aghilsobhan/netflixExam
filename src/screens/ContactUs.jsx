import React from "react";
import Head from "../componnents/Head";
import Layout from "../layout/Layout";
import{FaMicrophone, FaVoicemail, FaSitemap} from "react-icons/fa"

function ContactUs(props) {
  const ContactData=[
    {
      id:1,
      title:"Email Us",
      info:"lInteractively grow backend ideas for cros-platform models.",
      icon:FaVoicemail,
      contact:'info@zputemt.com'
    },
    {
      id:2,
      title:"Email Us",
      info:"lInteractively grow backend ideas for cros-platform models.",
      icon:FaMicrophone,
      contact:'info@zputemt.com'
    },
    {
      id:3,
      title:"Location",
      info:"lInteractively grow backend ideas for cros-platform models.",
      icon:FaSitemap,
      contact:'info@zputemt.com'
    }
  ]
  return  (  
   <Layout>
  <div className="min-height-screen container mx-auto my-6 px-2 ">
    <Head title="Contact Us" />
    <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
   {
    ContactData.map((item)=>(
      <div key={item.id} className="border border-border flex-colo p-10 bg-dry rounded-lg">
      <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain">
        <item.icon/>
        
      </span>
      <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
      <p className="mb-0 text-sm text-text leading-7">
        <a href={`mailto:${item.contact}`} className="text-blue-600 ">{item.contact}</a>
      {item.info}
      </p>
      </div>
    ))
   }
    </div>
  </div>
</Layout>);
}

export default ContactUs;
