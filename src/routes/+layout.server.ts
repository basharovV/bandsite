import type { LayoutData, LayoutServerLoad } from './$types';
 
export const load: LayoutServerLoad = () => {
  return {
    sections: [
      { slug: 'profile', title: 'Profile' },
      { slug: 'notifications', title: 'Notifications' }
    ]
  };
}