import { useToast } from 'vue-toastification';

interface Options {
  closeOnClick: boolean;
}

export function useNotification() {
  const toast = useToast();

  function showSuccessMessage(text: string = 'Success!', options?: Partial<Options>) {
    toast.success(text, options);
  }

  function showInfoMessage(text: string = 'Hmmm...', options?: Partial<Options>) {
    toast.info(text, options);
  }

  function showWarningMessage(text: string = 'Stop! Are u sure?', options?: Partial<Options>) {
    toast.warning(text, options);
  }

  function showErrorMessage(text: string = 'Error!!!', options?: Partial<Options>) {
    toast.error(text, options);
  }

  return {
    showSuccessMessage,
    showInfoMessage,
    showWarningMessage,
    showErrorMessage,
  };
}
