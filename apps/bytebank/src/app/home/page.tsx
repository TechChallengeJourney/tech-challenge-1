'use client';

import { ReactElement } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import {
  CardGiftcardOutlined,
  AssuredWorkload,
  StarBorderOutlined,
  DevicesOtherOutlined,
} from '@mui/icons-material';

import {
  BytebankText,
  BytebankIllustration,
  BytebankButton,
} from '@bytebank/shared';

import styles from './page.module.scss';

const BENEFITS = [
  {
    icon: <CardGiftcardOutlined color="success" sx={{ fontSize: 80 }} />,
    title: 'Conta e cartão gratuitos',
    description:
      'Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção.',
  },
  {
    icon: <AssuredWorkload color="success" sx={{ fontSize: 80 }} />,
    title: 'Saques sem custo',
    description:
      'Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.',
  },
  {
    icon: <StarBorderOutlined color="success" sx={{ fontSize: 80 }} />,
    title: 'Programa de pontos',
    description:
      'Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!',
  },
  {
    icon: <DevicesOtherOutlined color="success" sx={{ fontSize: 80 }} />,
    title: 'Seguro Dispositivos',
    description:
      'Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica.',
  },
];

export default function Home(): ReactElement {
  const theme = useTheme<Theme>();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderBanner = (): ReactElement => (
    <div className={styles.banner}>
      <BytebankText
        className={styles.bannerText}
        variant="md"
        color="black"
        sx={{ fontWeight: 600 }}
      >
        Experimente mais liberdade no controle da sua vida financeira.
        Crie sua conta com a gente!
      </BytebankText>

      <BytebankIllustration
        className={styles.illustration}
        variant="auto"
        name="graphic"
      />
    </div>
  );

  const renderMobileButtons = (): ReactElement | null => {
    if (!isMobile) return null;

    return (
      <div className={styles.mobileButtonsWrapper}>
        <BytebankButton
          color="black"
          label="Abrir conta"
          variant="contained"
          href="/open-account"
        />
        <BytebankButton
          variant="outlined"
          color="black"
          label="Já tenho conta"
          href="/login"
        />
      </div>
    );
  };

  const renderValuePropositionBlock = (): ReactElement => (
    <>
      {renderMobileButtons()}

      <BytebankText variant="h1" color="black" sx={{ fontWeight: 600 }}>
        Vantagens do nosso banco:
      </BytebankText>

      <div className={styles.valuePropositionWrapper}>
        {BENEFITS.map(({ icon, title, description }, index) => (
          <div key={index} className={styles.valueProposition}>
            {icon}
            <BytebankText variant="sm" color="success" sx={{ fontWeight: 600 }}>
              {title}
            </BytebankText>
            <BytebankText className={styles.text}>{description}</BytebankText>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <div className={styles.homePage}>
      {renderBanner()}
      {renderValuePropositionBlock()}
    </div>
  );
}
