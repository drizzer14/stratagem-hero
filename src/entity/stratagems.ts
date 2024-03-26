import type { Stratagem } from './stratagem';

export const stratagems = {
  reinforce: {
    id: 'reinforce',
    title: 'Reinforce',
    code: 'wsdaw',
  },
  sos_beacon: {
    id: 'sos_beacon',
    title: 'SOS Beacon',
    code: 'wsdw',
  },
  resupply: {
    id: 'resupply',
    title: 'Resupply',
    code: 'sswd',
  },
  hellbomb: {
    id: 'hellbomb',
    title: 'NUX-223 Hellbomb',
    code: 'swaswdsw',
  },
  sssd_delivery: {
    id: 'sssd_delivery',
    title: 'SSSD Delivery',
    code: 'sssssww',
  },
  seismic_probe: {
    id: 'seismic_probe',
    title: 'Seismic Probe',
    code: 'wwadss',
  },
  upload_data: {
    id: 'upload_data',
    title: 'Upload Data',
    code: 'adwww',
  },
  eagle_rearm: {
    id: 'eagle_rearm',
    title: 'Eagle Rearm',
    code: 'wwawd',
  },
  // illumination_flare: {
  //   id: 'illumination_flare',
  //   title: 'Illumination Flare',
  //   code: 'ddaa',
  // },
  seaf_artillery: {
    id: 'seaf_artillery',
    title: 'SEAF Artillery',
    code: 'dwws',
  },
  super_earth_flag: {
    id: 'super_earth_flag',
    title: 'Super Earth Flag',
    code: 'swsw',
  },
  hmg_emplacement: {
    id: 'hmg_emplacement',
    title: 'E/MG-101 HMG Emplacement',
    code: 'swadda',
  },
  shield_generator_relay: {
    id: 'shield_generator_relay',
    title: 'FX-12 Shield Generator Relay',
    code: 'ssadad',
  },
  'anti-personnel_minefield': {
    id: 'anti-personnel_minefield',
    title: 'MD-6 Anti-Personnel Minefield',
    code: 'sawd',
  },
  incendiary_mines: {
    id: 'incendiary_mines',
    title: 'MD-I4 Incendiary Mines',
    code: 'saas',
  },
  machine_gun_sentry: {
    id: 'machine_gun_sentry',
    title: 'A/MG-43 Machine Gun Sentry',
    code: 'swddw',
  },
  gatling_sentry: {
    id: 'gatling_sentry',
    title: 'A/G-16 Gatling Sentry',
    code: 'swda',
  },
  mortar_sentry: {
    id: 'mortar_sentry',
    title: 'A/M-12 Mortar Sentry',
    code: 'swdds',
  },
  autocannon_sentry: {
    id: 'autocannon_sentry',
    title: 'A/AC-8 Autocannon Sentry',
    code: 'swdwaw',
  },
  rocket_sentry: {
    id: 'rocket_sentry',
    title: 'A/MLS-4X Rocket Sentry',
    code: 'swdda',
  },
  orbital_gatling_barrage: {
    id: 'orbital_gatling_barrage',
    title: 'Orbital Gatling Barrage',
    code: 'dsaww',
  },
  orbital_airburst_strike: {
    id: 'orbital_airburst_strike',
    title: 'Orbital Airburst Strike',
    code: 'ddd',
  },
  orbital_120mm_he_barrage: {
    id: 'orbital_120mm_he_barrage',
    title: 'Orbital 120MM HE Barrage',
    code: 'ddsads',
  },
  orbital_380mm_he_barrage: {
    id: 'orbital_380mm_he_barrage',
    title: 'Orbital 380MM HE Barrage',
    code: 'dswwass',
  },
  orbital_walking_barrage: {
    id: 'orbital_walking_barrage',
    title: 'Orbital Walking Barrage',
    code: 'dsdsds',
  },
  orbital_laser: {
    id: 'orbital_laser',
    title: 'Orbital Laser',
    code: 'dswds',
  },
  orbital_railcannon_strike: {
    id: 'orbital_railcannon_strike',
    title: 'Orbital Railcannon Strike',
    code: 'dwssd',
  },
  orbital_precision_strike: {
    id: 'orbital_precision_strike',
    title: 'Orbital Precision Strike',
    code: 'ddw',
  },
  orbital_gas_strike: {
    id: 'orbital_gas_strike',
    title: 'Orbital Gas Strike',
    code: 'ddsd',
  },
  orbital_ems_strike: {
    id: 'orbital_ems_strike',
    title: 'Orbital EMS Strike',
    code: 'ddas',
  },
  orbital_smoke_strike: {
    id: 'orbital_smoke_strike',
    title: 'Orbital Smoke Strike',
    code: 'ddsw',
  },
  eagle_strafing_run: {
    id: 'eagle_strafing_run',
    title: 'Eagle Strafing Run',
    code: 'wdd',
  },
  eagle_airstrike: {
    id: 'eagle_airstrike',
    title: 'Eagle Airstrike',
    code: 'wdsd',
  },
  eagle_cluster_bomb: {
    id: 'eagle_cluster_bomb',
    title: 'Eagle Cluster Bomb',
    code: 'wdssd',
  },
  eagle_napalm_airstrike: {
    id: 'eagle_napalm_airstrike',
    title: 'Eagle Napalm Airstrike',
    code: 'wdsw',
  },
  eagle_smoke_strike: {
    id: 'eagle_smoke_strike',
    title: 'Eagle Smoke Strike',
    code: 'wdws',
  },
  eagle_110mm_rocket_pods: {
    id: 'eagle_110mm_rocket_pods',
    title: 'Eagle 110MM Rocket Pods',
    code: 'wdwa',
  },
  eagle_500kg_bomb: {
    id: 'eagle_500kg_bomb',
    title: 'Eagle 500kg Bomb',
    code: 'wdsss',
  },
  machine_gun: {
    id: 'machine_gun',
    title: 'MG-43 Machine Gun',
    code: 'saswd',
  },
  'anti-materiel_rifle': {
    id: 'anti-materiel_rifle',
    title: 'APW-1 Anti-Materiel Rifle',
    code: 'sadws',
  },
  stalwart: {
    id: 'stalwart',
    title: 'M-105 Stalwart',
    code: 'saswwa',
  },
  'expendable_anti-tank': {
    id: 'expendable_anti-tank',
    title: 'EAT-17 Expendable Anti-tank',
    code: 'ssawd',
  },
  recoilless_rifle: {
    id: 'recoilless_rifle',
    title: 'GR-8 Recoilless Rifle',
    code: 'sadda',
  },
  flamethrower: {
    id: 'flamethrower',
    title: 'FLAM-40 Flamethrower',
    code: 'sawsw',
  },
  autocannon: {
    id: 'autocannon',
    title: 'AC-8 Autocannon',
    code: 'saswwd',
  },
  railgun: {
    id: 'railgun',
    title: 'RS-422 Railgun',
    code: 'sdswad',
  },
  spear: {
    id: 'spear',
    title: 'FAF-14 SPEAR Launcher',
    code: 'sswss',
  },
  grenade_launcher: {
    id: 'grenade_launcher',
    title: 'GL-21 Grenade Launcher',
    code: 'sawas',
  },
  laser_cannon: {
    id: 'laser_cannon',
    title: 'LAS-98 Laser Cannon',
    code: 'saswa',
  },
  arc_thrower: {
    id: 'arc_thrower',
    title: 'ARC-3 Arc Thrower',
    code: 'sdswaa',
  },
  jump_pack: {
    id: 'jump_pack',
    title: 'LIFT-850 Jump Pack',
    code: 'swwsw',
  },
  supply_pack: {
    id: 'supply_pack',
    title: 'B-1 Supply Pack',
    code: 'saswws',
  },
  guard_dog_rover: {
    id: 'guard_dog_rover',
    title: 'AX/LAS-5 "Guard Dog" Rover',
    code: 'swawdd',
  },
  ballistic_shield_backpack: {
    id: 'ballistic_shield_backpack',
    title: 'SH-20 Ballistic Shield Backpack',
    code: 'sasswa',
  },
  shield_generator_pack: {
    id: 'shield_generator_pack',
    title: 'SH-32 Shield Generator Pack',
    code: 'swadad',
  },
  guard_dog: {
    id: 'guard_dog',
    title: 'AX/AR-23 "Guard Dog"',
    code: 'swawds',
  },
} as const satisfies Record<Stratagem['id'], Stratagem>;

export type StratagemID = keyof typeof stratagems;
