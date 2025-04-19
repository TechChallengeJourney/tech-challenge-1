'use client';
import { BytebankText, BytebankIllustration } from '@bytebank/shared';
import {
  CardGiftcardOutlined,
  AssuredWorkload,
  StarBorderOutlined,
  DevicesOtherOutlined,
} from '@mui/icons-material';
import styles from './page.module.scss';

export default function Home() {
  const renderBanner = () => {
    return (
      <div className={styles.banner}>
        <BytebankText className={styles.text} variant="lg" color="primary">
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

  const renderValuePropositionBlock = () => {
    return (
      <div className={styles.valuePropositionWrapper}>
        <div className={styles.valueProposition}>
          <CardGiftcardOutlined color="success" sx={{ fontSize: 80 }} />
          <BytebankText color="success">Conta e cartão gratuitos</BytebankText>
          <BytebankText className={styles.text}>
            Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso:
            sem tarifa de manutenção.
          </BytebankText>
        </div>
        <div className={styles.valueProposition}>
          <AssuredWorkload color="success" sx={{ fontSize: 80 }} />
          <BytebankText color="success">Saques sem custo</BytebankText>
          <BytebankText className={styles.text}>
            Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h.
          </BytebankText>
        </div>
        <div className={styles.valueProposition}>
          <StarBorderOutlined color="success" sx={{ fontSize: 80 }} />
          <BytebankText color="success">Programa de pontos</BytebankText>
          <BytebankText className={styles.text}>
            Você pode acumular pontos com suas compras no crédito sem pagar
            mensalidade!
          </BytebankText>
        </div>
        <div className={styles.valueProposition}>
          <DevicesOtherOutlined color="success" sx={{ fontSize: 80 }} />
          <BytebankText color="success">Seguro Dispositivos</BytebankText>
          <BytebankText className={styles.text}>
            Seus dispositivos móveis (computador e laptop) protegidos por uma
            mensalidade simbólica.
          </BytebankText>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.homePage}>
      {renderBanner()}
      <BytebankText>Vantagens do nosso banco:</BytebankText>
      {renderValuePropositionBlock()}
    </div>
  );
}
