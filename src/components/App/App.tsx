import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../constants/constans';
import {ThemeProvider} from '../../contexts/ThemeContext';
import Promo from '../../pages/Promo/Promo';
import Voting from '../../pages/Voting/Voting';
import NotFoundScreen from '../../pages/NotFoundScreen/NotFoundScreen';
import Gallery from '../../pages/Gallery/Gallery';
import Breeds from '../../pages/Breeds/Breeds';
import BreedCard from '../../pages/BreedCard/BreedCard';
import { store } from '../../store';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.Promo} element={<Promo />} />
            <Route path={AppRoute.Voting} element={<Voting />} />
            <Route path={AppRoute.Breeds} element={<Breeds />} />
            <Route path={AppRoute.Breeds}>
              <Route path=':id' element={<BreedCard />} />
            </Route>
            <Route path={AppRoute.Gallery} element={<Gallery />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider >
  );
}

export default App;
