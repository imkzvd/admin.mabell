import { POSITION, useToast } from 'vue-toastification';

interface Options {
  closeOnClick: boolean;
}

export function useNotification() {
  const toast = useToast();

  function showSuccessMessage(text: string = 'Success!', options?: Partial<Options>) {
    toast.success(text, {
      ...options,
      position: POSITION.BOTTOM_RIGHT,
    });
  }

  function showInfoMessage(text: string = 'Hmmm...', options?: Partial<Options>) {
    toast.info(text, {
      ...options,
      position: POSITION.BOTTOM_RIGHT,
    });
  }

  function showWarningMessage(text: string = 'Stop! Are u sure?', options?: Partial<Options>) {
    toast.warning(text, {
      ...options,
      position: POSITION.BOTTOM_RIGHT,
    });
  }

  function showErrorMessage(text: string = 'Error!', options?: Partial<Options>) {
    toast.error(text, {
      ...options,
      position: POSITION.BOTTOM_RIGHT,
    });
  }

  return {
    showSuccessMessage,
    showInfoMessage,
    showWarningMessage,
    showErrorMessage,
  };
}
