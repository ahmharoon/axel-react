import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { tabsData } from '../../DataForPage/dummyData';

function TabsComponent() {
    return (
        <div id='features'>
            <Tabs id="custom-animation" value="bedroom" className='flex justify-center items-center'>
                <div className='w-1/2'>
                    <div className='w-4/5 flex flex-col justify-center items-center mx-auto'> 
                        <h1 className='text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>Features</h1>
                        <p className='text-2xl pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                            AxeL offers many great features. You can create your own room, request a service, buy modern looking furniture, sell furniture, and so much more. Take a sneak peek at each of them.
                        </p>
                        <TabsHeader>
                            {tabsData.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody>
                            {tabsData.map(({ value, desc, linkText }) => (
                                <TabPanel key={value} value={value}>
                                    <p className='relative right-3 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark'>
                                        {desc}
                                    </p>
                                    <span className='text-royalBlue font-inter leading-normal no-underline align-middle tracking-wide normal-case relative cursor-pointer right-3 hover:animate-pulse'>
                                        {linkText}
                                    </span>
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='w-4/5 mx-auto'>
                        <TabsBody
                            animate={{
                                mount: { y: 0 },
                                unmount: { y: 250 },
                            }}
                        >
                            {tabsData.map(({ value, img }) => (
                                <TabPanel key={value} value={value}>
                                    <img className='h-[650px]' src={img} alt="feature" />
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </div>
                </div>
            </Tabs>
        </div>
    );
}

export default TabsComponent;
