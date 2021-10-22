import React from 'react';
import {Button} from '../Button'
import {
  View
} from 'react-native';
import { useAuth } from '../../hooks/auth';
import { styles } from './styles';
import { COLORS } from '../../theme';

export function SignInBox(){

  const { signIn, isSigningIn } = useAuth();

  return (
    <View style={styles.container}>
      <Button 
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        title="ENTRAR COM GITHUB" 
        icon='github'
        onPress={signIn}
        isLoading={isSigningIn}/>
    </View>
  );
}