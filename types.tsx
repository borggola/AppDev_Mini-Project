/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  HomeNav: undefined
  CatNav: undefined
  DogNav: undefined
  SCNav: undefined
  BCNav: undefined
  PCNav: undefined
  RBCNav: undefined
  ACCNav: undefined
  HDNav: undefined
  CHHDNav: undefined
  SDNav: undefined
  PD: undefined
  BD: undefined
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type HomeParamlist = {
  Home: undefined
}

export type CatParamlist = {
  Cat: undefined
  SiameseCat: undefined
  BengalCat: undefined
  PersianCat: undefined
  RussianCat: undefined
  AmericanCat: undefined
}

export type DogParamlist = {
  Dog: undefined
  HuskyDog:undefined
  ChihuahuaDog: undefined
  Schitzu: undefined
  PoodleDog:undefined
  BullDog:undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
