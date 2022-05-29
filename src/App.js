import React, { useEffect } from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './Components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './Pages'
import { useStateContext } from './Context/ContextProvider';
import './App.css';

const App = () => {
    
    const { activeMenu } = useStateContext()

    return (
        <div>
            <BrowserRouter>
                <div className="flex relative dark:bg-zinc-700">
                    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
                        <TooltipComponent content="Settings" position="Top">
                            <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-lime-50 text-white" style={{background: "blue", borderRadius: "50%"}}>
                                <FiSettings/>
                            </button>
                        </TooltipComponent>
                    </div>
                    {activeMenu ? (
                        <div className="w-72 fixed sidebar dark:bg-zinc-700 bg-white">
                            <Sidebar/>
                        </div>
                    ) : (
                        <div className='w-0 dark:bg-zinc-800'>
                            <Sidebar/>
                        </div>
                    )}
                    <div className={`dark:bg-slate-100 bg-slate-100 min-h-screen w-full ${activeMenu ? "md:ml-72" : "flex-[2_2_0%]"}`}>
                        <div className="fixed md:static bg-slate-100 dark:bg-zinc-800 navbar w-full">
                            <Navbar/>
                        </div>
                    </div>
                    <div>
                        <Routes>
                            {/* Dashboard */}
                            <Route path="/" element={<Ecommerce/>}/>
                            <Route path="/ecommerce" element={<Ecommerce/>}/>

                            {/* Paegs */}
                            <Route path="/orders" element={<Orders/>}/>
                            <Route path="/employees" element={<Employees/>}/>
                            <Route path="/customers" element={<Customers/>}/>

                            {/* Apps */}
                            <Route path="/kanban" element={<Kanban/>}/>
                            <Route path="/editor" element={<Editor/>}/>
                            <Route path="/calendar" element={<Calendar/>}/>
                            <Route path="/color-picker" element={<ColorPicker/>}/>

                            {/* Charts */}
                            <Route path="/line" element={<Line/>}/>
                            <Route path="/area" element={<Area/>}/>
                            <Route path="/bar" element={<Bar/>}/>
                            <Route path="/pie" element={<Pie/>}/>
                            <Route path="/finacial" element={<Financial/>}/>
                            <Route path="/color-mapping" element={<ColorMapping/>}/>
                            <Route path="/pyramid" element={<Pyramid/>}/>
                            <Route path="/stacked" element={<Stacked/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;