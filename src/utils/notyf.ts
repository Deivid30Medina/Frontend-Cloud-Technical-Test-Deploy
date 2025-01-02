import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
  duration: 2000, // Duración global para los mensajes
  ripple: true,
  position: { x: 'center', y: 'top' },
  types: [
    {
      type: 'error',
      background: 'linear-gradient(to right,rgb(240, 157, 176),rgb(248, 102, 76))',
      icon: {
        className: '',
        tagName: 'span',
        text: '❌',
      },
    },
    {
      type: 'success',
      background: 'linear-gradient(to right, #96c93d, #00b09b)',
      icon: {
        className: '',
        tagName: 'span',
        text: '✅',
      },
    },
  ],
});

export default notyf;
