import "./App.css";
import About from "./pages/About/About";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Platform from "./pages/Platform/Platform";
import Contact from "./pages/Contacts/Contact";
import Career from "./pages/Career/Career";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsappIcon from "./pages/Home/WhatsppIcon";
import TermsAndPrivacyPage from "./pages/TermsPrivacy/TermsAndPrivacyPage";
import { ThemeProviders } from "./pages/Theme/ThemeProvider";
import "./pages/Theme/theme.css";
import { createContext, useState, useEffect } from "react";

import Dashboard from "./layouts/dashboard";
import Team from "./pages/Admin/Team";
import ProfileView from "./pages/Admin/Profileview";
import ResetPassword from "./pages/Admin/ResetPassword";
import Geography from "./components/Geography";
import Line from "./components/Line";
import Bar from "./components/Bar";
import Pie from "./components/Pie";
import Form from "./pages/Admin/Form";
import ContactInformation from "./pages/Admin/Contact";
import Invoice from "./pages/Admin/Inovice";
import CalendarComponent from "./layouts/Calendar/Calender";
import Faq from "./pages/Admin/Faq/Faq";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./layouts/NotFound";
import JobForm from "./pages/Admin/JobForm";
import JobManagement from "./pages/Admin/Job/JobManagement";
import FeedbackInformation from "./pages/Admin/FeedbackInformatio";
import TeamForm from "./pages/Admin/TeamForm";
import EmployeeDataGrid from "./pages/Admin/EmployeeTable";
import EmployeeForm from "./pages/Admin/EmployeeForm";
import EmployeeInvoiceForm from "./pages/Admin/InvoiceForm";
import HomeUpdated from "./pages/Home/HomeUpdated";
import ServicePage from "./pages/Service/ServicePage";
import ChangePassword from "./pages/Admin/ChangePassword";
import { useSelector } from "react-redux";
import MobileAppDevelopmentPage from "./components/mobileapp/MobileApp";
import ResponsiveWebDesign from "./components/ResponsiveWeb/ResponsiveWebDesign";
import WebDevelopmentPage from "./components/webapp/WebApp";
import CloudServices from "./components/CloudService/CloudServices";
import CustomSoftwareDevelopment from "./components/CustomSoftwareDevelopment/CustomSoftwareDevelopment";
import AiMl from "./components/DataAnalytics/AiMl";
import DataAnalytics from "./components/DataAnalytics/DataAnalytics";
import EnterpriseSolutions from "./components/EnterpriseSolutions/EnterpriseSolutions";
import DevOpsSolutions from "./components/CloudService/DevOpsSolutions";
import DigitalMarketingService from "./components/DigitalMarketingService/DigitalMarketingService";
import CareerTable from "./pages/Admin/CareerTable";
import CreateWebsite from "./components/CreateWebsite/CreateWebsite";
import IphoneApp from "./components/iPhoneApp/iPhoneApp";
import AndroidDevelopment from "./components/AndroidApp/AndroidDevelopment";
import ContentWritingService from "./components/ContentWriting/ContentWritingService";
import SearchEngine from "./components/SearchEngine/SearchEngine";
import BusinessSolution from "./components/BusinessSolutions/BusinessSolution";
import CloudMigration from "./components/CloudMigration/CloudMigration";
import BusinessSolutionsPage from "./components/BusinessSolution/BusinessSolution";
import CloudSolutionsPage from "./components/CloudService/CloudSolution";
import MobileAppDevelopment from "./components/mobileapps/MobileApp";
import ProductSpreads from "./components/Spreads/ProductSpreads";
import HybridApp from "./components/HybridApp/HybridApp";
import WebDevelopment from "./components/WebDevelopment/WebDevelopment";
import RequestForQuotation from "./pages/Admin/QuotationTable";

export const MyContext = createContext();

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/invoice-form" element={<EmployeeInvoiceForm />} />
    <Route path="/team" element={<Team />} />
    <Route path="/career-view" element={<CareerTable />} />
    <Route path="/contacts" element={<ContactInformation />} />
    <Route path="/invoices" element={<Invoice />} />
    <Route path="/form" element={<Form />} />
    <Route path="/emp-view" element={<EmployeeDataGrid />} />
    <Route path="/quot-view" element={<RequestForQuotation />} />
    <Route path="/emp-form" element={<EmployeeForm />} />
    <Route path="/team-form" element={<TeamForm />} />
    <Route path="/job-view" element={<JobManagement />} />
    <Route path="/feedback-view" element={<FeedbackInformation />} />
    <Route path="/job-form" element={<JobForm />} />
    <Route path="/calendar" element={<CalendarComponent />} />
    <Route path="/faq" element={<Faq />} />
    <Route path="/bar" element={<Bar />} />
    <Route path="/pie" element={<Pie />} />
    <Route path="/line" element={<Line />} />
    <Route path="/geography" element={<Geography />} />
    <Route path="/profile" element={<ProfileView />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const PublicRoutes = () => (
  <Routes>
    <Route path="/" element={<HomeUpdated />} />
    {/* <Route path="/services" element={<ServicePage />} /> */}
    <Route
      path="/services/website-app-development"
      element={<CreateWebsite />}
    />
    <Route path="/services/ios-app-development" element={<IphoneApp />} />
    <Route
      path="/services/mobile-solution"
      element={<MobileAppDevelopment />}
    />
    <Route
      path="/services/android-app-development"
      element={<AndroidDevelopment />}
    />
    <Route path="/services/hybrid-app-development" element={<HybridApp />} />
    <Route
      path="/services/software-development-services"
      element={<CustomSoftwareDevelopment />}
    />
    <Route
      path="/services/content-management-system"
      element={<ContentWritingService />}
    />
    <Route path="/services/seo-service" element={<SearchEngine />} />
    <Route path="/services/business-solution" element={<BusinessSolution />} />
    <Route
      path="/services/cloud-solution-and-data-migration"
      element={<CloudMigration />}
    />
    <Route path="/aboutus" element={<About />} />
    <Route path="/product" element={<ProductSpreads />} />
    <Route path="/platform" element={<Platform />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/career" element={<Career />} />
    <Route path="/termsandprivacy" element={<TermsAndPrivacyPage />} />
    <Route
      path="/services/mobile-app-development"
      element={<MobileAppDevelopmentPage />}
    />
    <Route
      path="/services/web-designe-solution"
      element={<ResponsiveWebDesign />}
    />
    <Route
      path="/services/responsive-web-designing"
      element={<ResponsiveWebDesign />}
    />
    <Route path="/services/website-development" element={<WebDevelopment/>} />
    <Route path="/services/cloud-solution" element={<CloudSolutionsPage />} />
    <Route
      path="/services/digital-marketing-solution"
      element={<DigitalMarketingService />}
    />
    <Route
      path="/services/web-designing-solution"
      element={<EnterpriseSolutions />}
    />
    <Route
      path="/custom-software-development"
      element={<CustomSoftwareDevelopment />}
    />
    <Route path="/enterprise-solutions" element={<EnterpriseSolutions />} />
    <Route path="/cloud-services" element={<CloudServices />} />
    <Route path="/data-analytics" element={<DataAnalytics />} />
    <Route path="/ai-ml" element={<AiMl />} />
    <Route
      path="/services/digital-marketing-services"
      element={<DigitalMarketingService />}
    />
    <Route path="/devops-solutions" element={<DevOpsSolutions />} />
    <Route
      path="/services/bussiness-solution"
      element={<BusinessSolutionsPage />}
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

function App() {
  const [theme, colorMode] = useMode();
  const [isLogin, setIsLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isAuthenticated,
    error: authError,
    loading: authLoading,
  } = useSelector((state) => state.auth);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLogin(!!token);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MyContext.Provider value={{ isLogin, setIsLogin }}>
      <ToastContainer />
      <BrowserRouter>
        {isLogin ? (
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <AdminLayout>
                <AdminRoutes />
              </AdminLayout>
            </ThemeProvider>
          </ColorModeContext.Provider>
        ) : (
          <ThemeProviders>
            <Header isScrolled={isScrolled} />
            <WhatsappIcon />
            <PublicRoutes />
            <Footer />
          </ThemeProviders>
        )}
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
