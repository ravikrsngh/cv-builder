import { Routes, Route } from 'react-router-dom';

import LoginPage from './../pages/auth/login';
import SignUpPage from './../pages/auth/signup';
import ForgotPasswordPage from './../pages/auth/forgotPassword';
import ChangePasswordPage from './../pages/auth/changePassword';

import SelectTemplate from './../pages/formPages/selectTemplate';
import FormDetailPage from './../pages/formPages/formDetails';
import EnterPersonalDetailsPage from './../pages/formPages/enterPersonalDetails';
import EnterWorkHistoryPage from './../pages/formPages/enterWorkHistory';
import EnterEducationPage from './../pages/formPages/enterEducation';
import EnterSkillsPage from './../pages/formPages/enterSkills';
import EnterProfessionalReferencePage from './../pages/formPages/enterProfessionalReference';
import PreviewTemplate from './../pages/formPages/previewTemplate';

import Dashboard from './../pages/dashboard/dashboard';
import AccountSettings from './../pages/dashboard/accountSettings';
import LoginAndSecurity from './../pages/dashboard/loginAndSecurity';
import YourCV from './../pages/dashboard/yourCV';
import YourCoverLetters from './../pages/dashboard/yourCoverLetters';
import YourTemplates from './../pages/dashboard/yourTemplates';
import SharedCV from './../pages/dashboard/sharedCV';
import PurchaseHistory from './../pages/dashboard/purchaseHistory';
import OurServices from './../pages/dashboard/ourServices';
import YourSubscription from './../pages/dashboard/yourSubscription';
import OurTeams from './../pages/dashboard/ourTeams';
import IndividualTeamPage from './../pages/individualTeam/individualTeam';
import ServiceDetails from './../pages/serviceDetails/serviceDetails';

const RouteData = () => {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/forgot_password' element={<ForgotPasswordPage />} />
      <Route path='/change_password' element={<ChangePasswordPage />} />
      <Route path='/select-templates' element={<SelectTemplate />} />
      <Route path='/enter-your-details' element={<FormDetailPage />} >
        <Route path="personal-details" element={<EnterPersonalDetailsPage />} />
        <Route path="work-history" element={<EnterWorkHistoryPage />} />
        <Route path="education" element={<EnterEducationPage />} />
        <Route path="skills" element={<EnterSkillsPage />} />
        <Route path="professional-reference" element={<EnterProfessionalReferencePage />} />
      </Route>
      <Route path='/dashboard' element={<Dashboard />}>
        <Route path="account-settings" element={<AccountSettings />} />
        <Route path="login-and-security" element={<LoginAndSecurity />} />
        <Route path="your-cv" element={<YourCV />} />
        <Route path="your-cover-letters" element={<YourCoverLetters />} />
        <Route path="your-templates" element={<YourTemplates />} /><Route path="your-templates" element={<YourTemplates />} />
        <Route path="shared-cv" element={<SharedCV />} />
        <Route path="purchase-history" element={<PurchaseHistory />} />
        <Route path="your-subscription" element={<YourSubscription />} />
        <Route path="our-services" element={<OurServices />} />
        <Route path="our-team" element={<OurTeams />} />
        <Route path="our-team/:id" element={<IndividualTeamPage/>} />
        <Route path="our-services/:id" element={<ServiceDetails />} />
      </Route>
      <Route path='/preview-template' element={<PreviewTemplate />} />
    </Routes>
  );
};

export default RouteData;
