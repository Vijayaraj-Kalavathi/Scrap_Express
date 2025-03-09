import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

function Dashboard({ menuItem }) {

  const[drawerOpen,setDrawerOpen] = useState(false);
  console.log("drawerOpen",drawerOpen);

  const [openStates, setOpenStates] = useState(Array(menuItem?.length).fill(false));


  const OpenDrawer = () =>{
    setDrawerOpen(!drawerOpen)
  }
  // Toggle open state for a specific menu item
  const toggleSubnav = (index) => {
    setOpenStates(
      (prevStates) =>
        prevStates?.map((state, i) => (i === index ? !state : false)) // Close all other menus
    );
  };

  return (
    <div className="flex h-screen w-screen bg-red-300">
      {/* Sidebar */}
      <div className={`h-screen bg-gray-100 fixed md:relative  ${drawerOpen ? "w-[70%] sm:z-20 md:w-0 md:hidden" : "hidden md:w-[20%] md:block"}`}>
        <div className={`flex w-full justify-between h-[60px] bg-slate-500 p-3 ${drawerOpen ? "hidden":""}`}>
          <div className="flex justify-center items-center">logo</div>
          <div className="flex justify-center items-center" onClick={()=>OpenDrawer()}>
          <DensityMediumIcon/>
            </div>
        </div>

        <div className={drawerOpen ? "block mt-[42px] md:hidden" : " hidden md:block"}>
          {menuItem?.map((item, index) => (
            <div key={index}>
              <Typography
                component={!item.child ?  Link : 'div'}
                to={item.path} // Link to the parent path
                className="flex items-center justify-between p-2 hover:bg-gray-200 rounded cursor-pointer"
                onClick={()=>item.child && toggleSubnav(index)}
              >
                <div className="flex items-center gap-2">
                  <DashboardCustomizeIcon />
                  <span>{item.title}</span>
                </div>
                {item.child && (openStates[index] ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />)}
              </Typography>

              {/* Render child routes if open */}
              {openStates[index]  &&
                  item.child?.map((child, childIndex) => (
                  <Typography
                    key={childIndex}
                    component={Link}
                    to={child.path} // Link to the nested path
                    className="flex items-center justify-between p-2 pl-8 hover:bg-gray-200 rounded cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span>{child.title}</span>
                    </div>
                  </Typography>
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex flex-col h-screen ${drawerOpen ? 'w-full ml-0' : 'md:w-[80%]'} bg-gray-300`}>
        <div className="w-full h-[70px] bg-gray-400 sticky top-0 z-10 flex  items-center justify-between p-2">
          <div className={drawerOpen ? "block" : "md:hidden"}  onClick={()=>OpenDrawer()}>
           <DensityMediumIcon/>
          </div>
          <div>
            Profile
          </div>
        </div>
        <div className="w-full mt-[60px] overflow-y-auto">
          <div className="p-4">
            <h1 className="text-2xl font-bold">Main Content</h1>
            <p>Elon Reeve Musk (/ˈiːlɒn mʌsk/; born June 28, 1971) is a businessman known for his key roles in Tesla, Inc., SpaceX, and Twitter (which he rebranded as X). Since 2025, he has been a senior advisor to United States President Donald Trump and head of the Department of Government Efficiency (DOGE). Musk is the wealthiest person in the world; as of February 2025, Forbes estimates his net worth to be US$384 billion.

Born to a wealthy family in Pretoria, South Africa, Musk emigrated to Canada in 1989 and acquired its citizenship via his mother. He moved to the U.S. and studied at the University of Pennsylvania before moving to California to pursue business ventures, and in 1995 co-founded the software company Zip2. After its sale in 1999, he co-founded X.com, an online payment company which later became PayPal, which was acquired by eBay in 2002 for $1.5 billion. That year, Musk also became a U.S. citizen.

In 2002, Musk founded SpaceX and became its CEO and chief engineer. The company has since led innovations in reusable rockets and commercial spaceflight. In 2004, Musk joined Tesla, Inc., as an early investor, and became its CEO and product architect in 2008; it has become a market leader in electric vehicles. In 2015, he co-founded OpenAI to advance artificial intelligence research, but left its board in 2018. In 2016, Musk co-founded Neuralink, a company focused on brain–computer interfaces, and in 2017 launched the Boring Company, which aims to develop tunnel transportation. Musk was named Time magazine's Person of the Year in 2021. In 2022, he acquired Twitter, implementing significant changes and rebranding it as X in 2023. In January 2025, he was appointed head of Trump's newly created DOGE.

Musk's political activities and views have made him a polarizing figure. He has been criticized for making unscientific and misleading statements, including COVID-19 misinformation, affirming antisemitic and transphobic comments, and promoting conspiracy theories. His acquisition of Twitter was controversial due to a subsequent increase in hate speech and the spread of misinformation on the service. Musk has engaged in political activities in several countries, including as a vocal and financial supporter of Trump. Musk was the largest donor in the 2024 U.S. presidential election and is a supporter of far-right figures, causes, and political parties.

Early life
See also: Musk family
Elon Reeve Musk was born on June 28, 1971, in Pretoria, South Africa's administrative capital.[2][3] He is of British and Pennsylvania Dutch ancestry.[4][5] His mother, Maye (née Haldeman), is a model and dietitian born in Saskatchewan, Canada, and raised in South Africa.[6][7][8][a] His father, Errol Musk, is a South African electromechanical engineer, pilot, sailor, consultant, emerald dealer, and property developer, who partly owned a rental lodge at Timbavati Private Nature Reserve.[14][15][16][17] Elon has a younger brother, Kimbal, a younger sister, Tosca, as well as four paternal half-siblings.[18][19][8][20] Musk was raised in the Anglican Church, in which he was baptized.[21][22]</p>
            <Outlet /> {/* Render nested routes here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;