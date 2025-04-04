import { useState } from 'react';
import { Box, ComboBox, DefaultLabelProvider, Flex, Heading } from 'gestalt';

const myI18nTranslator = (val: string) => val.toUpperCase();

const labels = {
  Accordion: {
    accessibilityCollapseLabel: myI18nTranslator('Collapse section'),
    accessibilityExpandLabel: myI18nTranslator('Expand section'),
  },
  ActivationCard: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss'),
  },
  BannerOverlay: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss Banner'),
  },
  BannerCallout: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss Banner'),
    iconAccessibilityLabelError: myI18nTranslator('Error'),
    iconAccessibilityLabelInfo: myI18nTranslator('Information'),
    iconAccessibilityLabelRecommendation: myI18nTranslator('Recommendation'),
    iconAccessibilityLabelWarning: myI18nTranslator('Warning'),
    iconAccessibilityLabelSuccess: myI18nTranslator('Success'),
  },
  ButtonSocial: {
    textLoginEmail: myI18nTranslator('Login with Email'),
    textLoginFacebook: myI18nTranslator('Login with Facebook'),
    textLoginGoogle: myI18nTranslator('Login with Google'),
    textLoginApple: myI18nTranslator('Login with Apple'),
    textLoginLine: myI18nTranslator('Login with Line'),
    textContinueEmail: myI18nTranslator('Continue with Email'),
    textContinueFacebook: myI18nTranslator('Continue with Facebook'),
    textContinueGoogle: myI18nTranslator('Continue with Google'),
    textContinueApple: myI18nTranslator('Continue with Apple'),
    textContinueLine: myI18nTranslator('Continue with Line'),
    textSignupEmail: myI18nTranslator('Sign up with Email'),
    textSignupFacebook: myI18nTranslator('Sign up with Facebook'),
    textSignupGoogle: myI18nTranslator('Sign up with Google'),
    textSignupApple: myI18nTranslator('Sign up with Apple'),
    textSignupLine: myI18nTranslator('Sign up with Line'),
  },
  DatePicker: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss date picker'),
    dismissButton: myI18nTranslator('Close'),
    openCalendar: myI18nTranslator('Open calendar'),
    previousMonth: myI18nTranslator('Navigate to previou month'),
    nextMonth: myI18nTranslator('Navigate to next month'),
  },
  DateRange: {
    cancelText: myI18nTranslator('Cancel'),
    applyText: myI18nTranslator('Apply'),
  },
  ChartGraph: {
    accessibilityLabelPrefixText: myI18nTranslator('ChartGraph'),
    defaultViewText: myI18nTranslator('Default view mode'),
    accessibleViewText: myI18nTranslator('Visual pattern view'),
    tabularData: myI18nTranslator('Tabular representation'),
    accessibilityLabelDismissModal: myI18nTranslator('Dismiss tabular representation modal'),
    tableSeriesText: myI18nTranslator('Series'),
    tableXAxisText: myI18nTranslator('x-axis values'),
    tableYAxisText: myI18nTranslator('y-axis values'),
    downloadCsvButtonText: myI18nTranslator('Download as .csv'),
    cancelButtonText: myI18nTranslator('Cancel'),
  },
  ComboBox: {
    noResultText: myI18nTranslator('No results'),
    accessibilityClearButtonLabel: myI18nTranslator('Clear input'),
  },
  Link: {
    accessibilityNewTabLabel: myI18nTranslator('Opens a new tab'),
    accessibilityDownloadLabel: myI18nTranslator('Downloads a file'),
  },
  Modal: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss modal'),
  },
  Popover: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss popover'),
  },
  OverlayPanel: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss overlay panel'),
    dismissConfirmationMessage: myI18nTranslator('Are you sure you want to dismiss?'),
    dismissConfirmationSubtext: myI18nTranslator(
      'You will lose all of your changes. This cannot be undone',
    ),
    dismissConfirmationPrimaryActionText: myI18nTranslator('Yes, dismiss'),
    dismissConfirmationPrimaryActionTextLabel: myI18nTranslator('Yes, dismiss the overlay panel'),
    dismissConfirmationSecondaryActionText: myI18nTranslator('No, go back'),
    dismissConfirmationSecondaryActionTextLabel: myI18nTranslator(
      'No, go back to the overlay panel',
    ),
  },
  SheetMobile: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss bottom sheet'),
    accessibilityGrabberLabel: myI18nTranslator('Grabber'),
    accessibilityLabel: myI18nTranslator('Bottom sheet'),
  },
  SearchField: {
    accessibilityClearButtonLabel: myI18nTranslator('Clear input'),
  },
  SideNavigation: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss side navigation'),
    accessibilityCollapseButtonLabel: myI18nTranslator(
      'Navigation expanded. Click button to collapse.',
    ),
    accessibilityExpandButtonLabel: myI18nTranslator(
      'Navigation collapsed. Click button to expand.',
    ),
    accessibilityEllipsisLabel: myI18nTranslator(
      'Collapsed navigation items. Expand for more options',
    ),
  },
  BannerSlim: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss banner'),
    iconAccessibilityLabelError: myI18nTranslator('Error'),
    iconAccessibilityLabelInfo: myI18nTranslator('Information'),
    iconAccessibilityLabelRecommendation: myI18nTranslator('Recommendation'),
    iconAccessibilityLabelWarning: myI18nTranslator('Warning'),
    iconAccessibilityLabelSuccess: myI18nTranslator('Success'),
  },
  Spinner: {
    accessibilityLabel: myI18nTranslator('Loading'),
  },
  TableOfContents: {
    accessibilityLabel: myI18nTranslator('Table of contents'),
  },
  Tabs: {
    accessibilityNotificationLabel: myI18nTranslator(
      'This tab is displaying a notification indicator',
    ),
  },
  Tag: {
    accessibilityErrorIconLabel: myI18nTranslator('Error'),
    accessibilityRemoveIconLabel: myI18nTranslator('Remove tag'),
    accessibilityWarningIconLabel: myI18nTranslator('Warning'),
  },
  TagData: {
    accessibilityRemoveIconLabel: myI18nTranslator('Remove tag'),
  },
  TextField: {
    accessibilityHidePasswordLabel: myI18nTranslator('Hide password'),
    accessibilityShowPasswordLabel: myI18nTranslator('Show password'),
  },
  HelpButton: {
    tooltipMessage: myI18nTranslator('Click to learn more'),
  },
  Toast: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss message'),
    accessibilityIconSuccessLabel: myI18nTranslator('Success message'),
    accessibilityIconErrorLabel: myI18nTranslator('Error message'),
    accessibilityProcessingLabel: myI18nTranslator('Processing message'),
  },
  BannerUpsell: {
    accessibilityDismissButtonLabel: myI18nTranslator('Dismiss banner'),
  },
  Video: {
    accessibilityMaximizeLabel: myI18nTranslator('Maximize'),
    accessibilityMinimizeLabel: myI18nTranslator('Minimize'),
    accessibilityMuteLabel: myI18nTranslator('Mute'),
    accessibilityPauseLabel: myI18nTranslator('Pause'),
    accessibilityPlayLabel: myI18nTranslator('Play'),
    accessibilityProgressLabel: myI18nTranslator('Video progress'),
    accessibilityUnmuteLabel: myI18nTranslator('Unmute'),
    accessibilityHideCaptionsLabel: myI18nTranslator('Hide captions'),
    accessibilityShowCaptionsLabel: myI18nTranslator('Show captions'),
  },
} as const;

const pronouns = [
  'ey / em',
  'he / him',
  'ne / nem',
  'she / her',
  'they / them',
  've / ver',
  'xe / xem',
  'xie / xem',
  'zie / zem',
];

export default function Example() {
  const [errorMessage, setErrorMessage] = useState<string | null | undefined>();

  const handleOnBlur = ({
    value,
  }: {
    event: React.FocusEvent<HTMLInputElement> | React.SyntheticEvent<HTMLInputElement>;
    value: string;
  }) => {
    if (value !== '' && !pronouns.includes(value)) setErrorMessage('Please, select a valid option');
  };

  // @ts-expect-error - TS2554 - Expected 1 arguments, but got 0.
  const resetErrorMessage = errorMessage ? () => setErrorMessage() : () => {};

  return (
    <DefaultLabelProvider labels={labels}>
      <Box height="100%" marginTop={3} padding={2} width="100%">
        <Flex
          alignItems="center"
          direction="column"
          gap={5}
          height="100%"
          justifyContent="center"
          width="100%"
        >
          <Heading size="300">For apps using internationalization</Heading>

          <Box width={320}>
            <ComboBox
              errorMessage={errorMessage}
              helperText="Choose your pronouns to appear on your profile so others know how to refer to you. You can edit or remove these any time."
              id="translations-combobox"
              label="Pronouns"
              noResultText="No results for your selection"
              onBlur={handleOnBlur}
              onChange={resetErrorMessage}
              onClear={resetErrorMessage}
              options={pronouns.map((pronoun, index) => ({
                label: pronoun,
                value: `value${index}`,
              }))}
              placeholder="Add your pronouns"
            />
          </Box>
        </Flex>
      </Box>
    </DefaultLabelProvider>
  );
}
