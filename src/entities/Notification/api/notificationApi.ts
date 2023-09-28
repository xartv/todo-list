import { rtkApi } from 'shared/api/rtkApi';

import { NotificationEntity } from '../model/types/notificationEntity';

const notificationsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getNotifications: build.query<NotificationEntity[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useNotifications = notificationsApi.useGetNotificationsQuery;
