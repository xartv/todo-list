import { useTranslation } from 'react-i18next';

import { Page } from 'widgets/Page';

import { EditableProfileCard, profileReducer } from 'features/Profile';

import { DynamicReducerLoader } from 'shared/lib/components/DynamicReducerLoader';
import { Text } from 'shared/ui/Text/Text';

import s from './ProfilePage.module.scss';

const profileReducerObject = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <DynamicReducerLoader asyncReducers={profileReducerObject} removeOnUnmount>
      <Page className={s.root}>
        <Text title={t('profile.title')} />
        <EditableProfileCard />
      </Page>
    </DynamicReducerLoader>
  );
};

export default ProfilePage;
