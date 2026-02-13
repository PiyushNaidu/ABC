
import { NodeData, NodeType } from './types';

export const MPIDC_HIERARCHY: NodeData = {
  id: 'mpidc-hq',
  name: 'MPIDC Head Office',
  location: 'Bhopal, Madhya Pradesh',
  type: NodeType.HEAD_OFFICE,
  status: 'online',
  description: 'Central Command & Control Hub',
  children: [
    {
      id: 'div-bhopal',
      name: 'Bhopal Division',
      type: NodeType.REGIONAL_OFFICE,
      status: 'online',
      children: [
        { id: 'dist-bhopal', name: 'Bhopal', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-mandideep', name: 'Mandideep Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-govindpura', name: 'Govindpura Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-raisen', name: 'Raisen', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-tamot', name: 'Tamot Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-sehore', name: 'Sehore', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-ashta', name: 'Ashta Industrial Area (Proposed)', type: NodeType.INDUSTRIAL_AREA, status: 'warning' }
        ]},
        { id: 'dist-rajgarh', name: 'Rajgarh', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-vidisha', name: 'Vidisha', type: NodeType.DISTRICT, status: 'online' }
      ]
    },
    {
      id: 'div-indore',
      name: 'Indore Division',
      type: NodeType.REGIONAL_OFFICE,
      status: 'online',
      children: [
        { id: 'dist-indore', name: 'Indore', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-pithampur', name: 'Pithampur (Sec I, II, III)', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-elec-complex', name: 'Electronic Complex', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-pardesipura', name: 'Pardesipura', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-crystal-it', name: 'Crystal IT Park', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-atulya-it', name: 'Atulya IT Park (3 & 4)', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-apparel', name: 'Apparel & Garment Cluster', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-food', name: 'Food Processing Park', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-dhar', name: 'Dhar', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-pmmitra', name: 'PM MITRA Park (Bhainsola)', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-bhensola', name: 'Bhensola Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-khargone', name: 'Khargone', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-nimrani', name: 'Nimrani IA (Phase I & II)', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-alirajpur', name: 'Alirajpur', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-barwani', name: 'Barwani', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-burhanpur', name: 'Burhanpur', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-jhabua', name: 'Jhabua', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-khandwa', name: 'Khandwa', type: NodeType.DISTRICT, status: 'online' }
      ]
    },
    {
      id: 'div-gwalior',
      name: 'Gwalior Division',
      type: NodeType.REGIONAL_OFFICE,
      status: 'online',
      children: [
        { id: 'dist-gwalior', name: 'Gwalior', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-malanpur', name: 'Malanpur Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-ashoknagar', name: 'Ashoknagar', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-datia', name: 'Datia', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-guna', name: 'Guna', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-shivpuri', name: 'Shivpuri', type: NodeType.DISTRICT, status: 'online' }
      ]
    },
    {
      id: 'div-chambal',
      name: 'Chambal Division',
      type: NodeType.REGIONAL_OFFICE,
      status: 'online',
      children: [
        { id: 'dist-morena', name: 'Morena', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-footwear', name: 'Mega Footwear & Accessories Cluster', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-sheopur', name: 'Sheopur', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-bhind', name: 'Bhind', type: NodeType.DISTRICT, status: 'online' }
      ]
    },
    {
      id: 'div-jabalpur',
      name: 'Jabalpur Division',
      type: NodeType.REGIONAL_OFFICE,
      status: 'online',
      children: [
        { id: 'dist-jabalpur', name: 'Jabalpur', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-richhai', name: 'Richhai Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-seoni', name: 'Seoni', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-burkalkhapa', name: 'Burkalkhapa Phase III', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-balaghat', name: 'Balaghat', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-chhindwara', name: 'Chhindwara', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-katni', name: 'Katni', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-mandla', name: 'Mandla', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-narsinghpur', name: 'Narsinghpur', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-dindori', name: 'Dindori', type: NodeType.DISTRICT, status: 'online' }
      ]
    },
    {
      id: 'div-rewa',
      name: 'Rewa Division',
      type: NodeType.REGIONAL_OFFICE,
      status: 'online',
      children: [
        { id: 'dist-rewa', name: 'Rewa', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-purena', name: 'Purena Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-satna', name: 'Satna', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-satna', name: 'Industrial Area Satna', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-sidhi', name: 'Sidhi', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-singrauli', name: 'Singrauli', type: NodeType.DISTRICT, status: 'online' }
      ]
    },
    {
      id: 'div-sagar',
      name: 'Sagar Division',
      type: NodeType.REGIONAL_OFFICE,
      status: 'online',
      children: [
        { id: 'dist-sagar', name: 'Sagar', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-karmpur', name: 'Karmpur Industrial Park', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-chhatarpur', name: 'Chhatarpur', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-damoh', name: 'Damoh', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-panna', name: 'Panna', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-tikamgarh', name: 'Tikamgarh', type: NodeType.DISTRICT, status: 'online' },
        { id: 'dist-niwari', name: 'Niwari', type: NodeType.DISTRICT, status: 'online' }
      ]
    },
    {
      id: 'div-special',
      name: 'Additional Strategic Hubs',
      type: NodeType.REGIONAL_OFFICE,
      status: 'online',
      children: [
        { id: 'dist-ujjain', name: 'Ujjain', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-vikram', name: 'Vikram Udyogpuri (DMIC Node)', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-medical', name: 'Medical Devices Park', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-neemuch', name: 'Neemuch', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-jhanjharwada', name: 'Jhanjharwada Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-cheetakheda', name: 'Cheetakheda Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' },
          { id: 'ia-basai', name: 'Basai Industrial Park', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-narmadapuram', name: 'Narmadapuram', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-powerzone', name: 'Power & Renewable Energy Zone', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]},
        { id: 'dist-shajapur', name: 'Shajapur', type: NodeType.DISTRICT, status: 'online', children: [
          { id: 'ia-maksi', name: 'Maksi Industrial Area', type: NodeType.INDUSTRIAL_AREA, status: 'online' }
        ]}
      ]
    }
  ]
};
