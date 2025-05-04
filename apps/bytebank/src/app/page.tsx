'use client';
import {
  BytebankButton,
  BytebankIllustration,
  BytebankText,
  BytebankProvider,
  BytebankExtract,
} from '@bytebank/shared';
import {
  AssuredWorkload,
  CardGiftcardOutlined,
  DevicesOtherOutlined,
  StarBorderOutlined,
} from '@mui/icons-material';
import { Box, useMediaQuery } from '@mui/material';
import { Theme, useTheme } from '@mui/material/styles';
import { ReactElement } from 'react';
import styles from './page.module.scss';

type Benefit = {
  icon: ReactElement;
  title: string;
  description: string;
};

const BENEFITS: Benefit[] = [
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

export default function Index(): ReactElement  {
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
        Experimente mais liberdade no controle da sua vida financeira. Crie sua
        conta com a gente!
      </BytebankText>

      <BytebankIllustration
        className={styles.illustration}
        variant="auto"
        name="graphic"
      />
      <BytebankExtract />
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
          // TODO: chamar modal/fazer lógica de abertura de conta(signup)
          sendSubmit={() => {
            alert('Chamar modal aqui (signup)');
          }}
        />
        <BytebankButton
          variant="outlined"
          color="black"
          label="Já tenho conta"
          // TODO: chamar modal/fazer lógica de acesso a conta(login)
          sendSubmit={() => {
            alert('Chamar modal aqui (login)');
          }}
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

      <Box
        display="flex"
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
            md: 'row',
          },
          gap: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
        justifyContent="center"
        alignItems="center"
        gap={2}
        flexWrap="wrap"
      >
        {BENEFITS.map(({ icon, title, description }: Benefit, index: number) => (
          <Box key={index} className={styles.valueProposition}>
            {icon}
            <BytebankText variant="sm" color="success" sx={{ fontWeight: 600 }}>
              {title}
            </BytebankText>
            <BytebankText className={styles.text}>{description}</BytebankText>
          </Box>
        ))}
      </Box>
    </>
  );

  return (
    <BytebankProvider>
      <div className={styles.contentWrapper}>
        {renderBanner()}
        {renderValuePropositionBlock()}
      </div>
    </BytebankProvider>
  );
}
