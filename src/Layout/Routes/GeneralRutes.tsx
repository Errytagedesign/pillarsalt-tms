// generalRoutes.js

import Signin from '@/Pages/Auth/Signin/Signin';
import { ReactElement } from 'react';

interface Route {
  path: string;
  element: ReactElement;
}

const generalRoutes: Route[] = [{ path: '/signin', element: <Signin /> }];

export default generalRoutes;
