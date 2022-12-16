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
    </Routes>
  );
};

export default RouteData;
