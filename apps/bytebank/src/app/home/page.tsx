'use client';

import {
  BytebankText,
  BytebankIllustration,
  BytebankButton,
} from '@bytebank/shared';
import {
  CardGiftcardOutlined,
  AssuredWorkload,
  StarBorderOutlined,
  DevicesOtherOutlined,
} from '@mui/icons-material';
import styles from './page.module.scss';
import { useMediaQuery } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  const theme = useTheme<Theme>();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderBanner = (): ReactElement => {
    return (
      <div className={styles.banner}>
        <BytebankText
          className={styles.bannerText}
          variant="md"
          color="dark"
          sx={{ fontWeight: 600 }}
        >
          Experimente mais liberdade no controle da sua vida financeira. Crie
          sua conta com a gente!
        </BytebankText>
        <BytebankIllustration
          className={styles.illustration}
          variant="auto"
          name="graphic"
        />
      </div>
    );
  };

  const renderMobileButtons = (): ReactElement | null => {
    if (!isMobile) return null;
    return (
      <div className={styles.mobileButtonsWrapper}>
        <BytebankButton 
          color="black" 
          label="Abrir conta" 
          variant="contained" />
        <BytebankButton
          variant="outlined"
          color="black"
          label="Já tenho conta"
        />
      </div>
    );
  };

  const renderValuePropositionBlock = (): ReactElement => {
    return (
      <>
        {renderMobileButtons()}
        <BytebankText variant="h1" color="dark" sx={{ fontWeight: 600 }}>
          Vantagens do nosso banco:
        </BytebankText>
        <div className={styles.valuePropositionWrapper}>
          <div className={styles.valueProposition}>
            <CardGiftcardOutlined color="success" sx={{ fontSize: 80 }} />
            <BytebankText variant="sm" color="success" sx={{ fontWeight: 600 }}>
              Conta e cartão gratuitos
            </BytebankText>
            <BytebankText className={styles.text}>
              Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso:
              sem tarifa de manutenção.
            </BytebankText>
          </div>
          <div className={styles.valueProposition}>
            <AssuredWorkload color="success" sx={{ fontSize: 80 }} />
            <BytebankText variant="sm" color="success" sx={{ fontWeight: 600 }}>
              Saques sem custo
            </BytebankText>
            <BytebankText className={styles.text}>
              Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
            </BytebankText>
          </div>
          <div className={styles.valueProposition}>
            <StarBorderOutlined color="success" sx={{ fontSize: 80 }} />
            <BytebankText variant="sm" color="success" sx={{ fontWeight: 600 }}>
              Programa de pontos
            </BytebankText>
            <BytebankText className={styles.text}>
              Você pode acumular pontos com suas compras no crédito sem pagar
              mensalidade!
            </BytebankText>
          </div>
          <div className={styles.valueProposition}>
            <DevicesOtherOutlined color="success" sx={{ fontSize: 80 }} />
            <BytebankText variant="sm" color="success" sx={{ fontWeight: 600 }}>
              Seguro Dispositivos
            </BytebankText>
            <BytebankText className={styles.text}>
              Seus dispositivos móveis (computador e laptop) protegidos por uma
              mensalidade simbólica.
            </BytebankText>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={styles.homePage}>
      {renderBanner()}
      {renderValuePropositionBlock()}
    </div>
  );
}
