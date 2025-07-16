export interface FormSubmissionResult {
  success: boolean;
  error?: string;
}

export const submitForm = async (
  form: HTMLFormElement,
  formName: string
): Promise<FormSubmissionResult> => {
  const formData = new FormData(form);
  formData.append('form-name', formName);
  
  try {
    const response = await fetch('/', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    
    return {
      success: response.ok,
      error: response.ok ? undefined : 'Form submission failed'
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      error: 'An error occurred while submitting the form'
    };
  }
};
