import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { ECountries } from 'entities/Country';
import { ECurrency } from 'entities/Currency';
import { ProfileEntity } from 'entities/Profile';

import { _api } from 'shared/api/api';
import { withRender } from 'shared/lib/tests/withRender/withRender';

import { profileReducer } from '../model/slice/profileSlice';

import { EditableProfileCard } from './EditableProfileCard';

const profile: ProfileEntity = {
  id: 1,
  firstname: 'admin',
  lastname: 'admin',
  age: '18',
  currency: ECurrency.RUB,
  country: ECountries.RUSSIA,
  city: 'Moscow',
  username: 'admin123',
  avatar: '123',
};

const profileReducerObject = {
  profile: profileReducer,
};

const options = {
  initialState: {
    profile: {
      readonly: true,
      fetchData: profile,
      formData: profile,
    },
    users: {
      authData: {
        id: 1,
      },
    },
  },
  asyncReducers: profileReducerObject,
};

describe('features/EditableProfileCard', () => {
  test('Switch read only mode', async () => {
    withRender(<EditableProfileCard />, options);

    await userEvent.click(screen.getByTestId('ProfileCard.EditButton'));
    expect(screen.getByTestId('ProfileCard.CancelButton')).toBeInTheDocument();
  });

  test('When click cancel button, data returns to initial state', async () => {
    withRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('ProfileCard.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Input.FirstName'));
    await userEvent.clear(screen.getByTestId('ProfileCard.Input.LastName'));

    await userEvent.type(screen.getByTestId('ProfileCard.Input.FirstName'), 'user firstname');
    await userEvent.type(screen.getByTestId('ProfileCard.Input.LastName'), 'user lastname');

    expect(screen.getByTestId('ProfileCard.Input.FirstName')).toHaveValue('user firstname');
    expect(screen.getByTestId('ProfileCard.Input.LastName')).toHaveValue('user lastname');

    await userEvent.click(screen.getByTestId('ProfileCard.CancelButton'));

    expect(screen.getByTestId('ProfileCard.Input.FirstName')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.Input.LastName')).toHaveValue('admin');
  });

  test('Validation error', async () => {
    withRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('ProfileCard.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Input.FirstName'));

    await userEvent.click(screen.getByTestId('ProfileCard.SaveButton'));

    expect(screen.getByTestId('ProfileCard.Error.Description')).toBeInTheDocument();
  });

  test('If no validation error, PUT request sends to server', async () => {
    const mockPutRequest = vi.spyOn(_api, 'put');

    withRender(<EditableProfileCard />, options);
    await userEvent.click(screen.getByTestId('ProfileCard.EditButton'));

    await userEvent.clear(screen.getByTestId('ProfileCard.Input.FirstName'));
    await userEvent.type(screen.getByTestId('ProfileCard.Input.FirstName'), 'user firstname');

    await userEvent.click(screen.getByTestId('ProfileCard.SaveButton'));

    expect(mockPutRequest).toHaveBeenCalledTimes(1);
  });
});
