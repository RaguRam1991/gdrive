import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@/Theme'
import InitStartup from '@/Store/Startup/Init'
import { Brand } from '@/Components'

import {ZText} from '../gdrive/comps';

const IndexStartupContainer = () => {
  const { Layout, Gutters, Fonts } = useTheme()

  const { t } = useTranslation()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(InitStartup.action())
  }, [dispatch])

  return (
    <View style={[Layout.fill, Layout.colCenter]}>
      <Brand />
      <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
      <ZText style={Fonts.textCenter}>{t('welcome')}</ZText>
    </View>
  )
}

export default IndexStartupContainer
