/*!
 * @license MPL-2.0-no-copyleft-exception
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * This Source Code Form is "Incompatible With Secondary Licenses", as
 * defined by the Mozilla Public License, v. 2.0.
 */

export default {
  locale: 'zh-TW',
  localeName: '中文（繁體）',

  title: 'tReader',
  titleWithName: '{0} - tReader',

  listFilterClear: '清除篩選',
  listSortTitle: '排序',
  listSortByDateRead: '依最後閱讀時間',
  listSortByDateAdd: '依加入時間',
  listSortByTitle: '依標題',
  listSortCancel: '取消',
  listImportTip: '正在匯入文字檔……',
  listNotYetRead: '新',
  listSearchPlaceholder: '搜尋',
  listEmptySearchTip: '沒有相符的檔案',
  listEmptyTip: '按下加號圖示匯入檔案',
  listDropArea: '将档案放在这里以匯入',

  readContentsTemplate: '目錄範本',
  readContentsTemplateDescription: '使用星號(*)作為萬用字元',
  readContentsTemplateHistory: '最近使用過的範本',
  readContentsTemplateSubmit: '產生目錄',
  readContentsTemplateClear: '清除',
  readContentsEmpty: '尚無目錄\n按下重新整理按鈕產生目錄',
  readBookmarkEmpty: '尚無書籤\n按下新增按鈕新增書籤',
  readSearchPlaceholder: '搜尋',
  readSearchInitial: '輸入文字以尋找',
  readSearchEmpty: '找不到 {0}',
  readSearchTooMany: '找到 {0} 筆項目，按下以繼續尋找',
  readPagePrevious: '上一頁',
  readPageNext: '下一頁',
  readPageScrollUp: '向上翻',
  readPageScrollDown: '向下翻',
  readControlClose: '隱藏按鈕',
  readAutoScrollStop: '停止捲動',
  readMenuButton: '更多',
  readMenuShare: '分享',
  readMenuDownload: '下載',
  readMenuAutoScroll: '自動捲動',
  readMenuCancel: '取消',


  configPageTitle: '設定',
  configWithDetail: '詳細資料',
  configInstallGroupTitle: '安裝',
  configInstallButton: '安裝網頁應用程式',
  configInstallGroupDescription: '如使用支援網頁應用程式的瀏覽器，您將可以在您的裝置上安裝 tReader；安裝後',
  configInstallIosGuide: '在 iOS 作業系統安裝網頁應用程式：使用 Safari 瀏覽器開啟此網頁；點擊“分享”按鈕；選擇“加入主畫面”。',
  configModeGroupTitle: '模式',
  configMode: '閱讀模式',
  configModeFlip: '翻頁',
  configModeScroll: '捲動',
  configThemeGroupTitle: '主題',
  configTheme: '主題',
  configThemeAuto: '自動',
  configThemeLight: '亮色',
  configThemeDark: '暗色',
  configDarkThemeGroupTitle: '暗色主題',
  configDarkThemeColor: '閱讀文字',
  configDarkThemeBackground: '閱讀背景',
  configLightThemeGroupTitle: '亮色主題',
  configLightThemeColor: '閱讀文字',
  configLightThemeBackground: '閱讀背景',
  configTextGroupTitle: '閱讀文字',
  configTextFontFamily: '字型',
  configTextFontFamilyUpload: '瀏覽字型檔案',
  configTextFontFamilyDefault: '預設字型',
  configTextFontFamilyCustom: '自訂字型',
  configTextFontSize: '大小',
  configTextFontSizeNum: '{0}',
  configTextLineHeight: '行高',
  configTextLineHeightNum: '{0}',
  configTextParagraphSpacing: '段落間距',
  configTextParagraphSpacingNum: '{0} 行',
  configTextLangTag: '語言標記',
  configTextLangTagTitle: '語言標記',
  configTextLangTagDescription: '語言標記用於標記文字的語言。語言標記可能影響文字的呈現與断行。',
  configPreprocessGroupTitle: '前置处理',
  configPreprocessMultipleNewLine: '合併連續空白行至',
  configPreprocessMultipleNewLineNum: '{0} 行',
  configPreprocessMultipleNewLineDisable: '不合併',
  configPreprocessChineseConvert: '汉字繁简转换',
  configPreprocessChineseConvertS2T: '簡體轉繁體',
  configPreprocessChineseConvertT2S: '繁體轉簡體',
  configPreprocessChineseConvertDisabled: '不使用',
  configSpeechGroupTitle: '朗讀',
  configSpeechVoice: '語音',
  configSpeechVoiceRemote: '(遠端)',
  configSpeechVoiceEmpty: '未發現可用的語音',
  configSpeechVoicePrivacy: '使用標記為“遠端”的語音時，您的文本將會傳送至第三方的伺服器以轉換語音。您可以在使用前首先確認對應的隱私權聲明。',
  configSpeechPitch: '語調',
  configSpeechPitchNum: pitch => {
    if (pitch === 0) return '0 (最低)';
    if (pitch === 2) return '2 (最高)';
    if (pitch === 1) return '1 (預設)';
    else return String(pitch);
  },
  configSpeechRate: '語速',
  configSpeechRateNum: rate => {
    if (rate === 1) return '1× (預設)';
    return rate + '×';
  },
  configScreenGroupTitle: '螢幕',
  configAutoLock: '自動鎖定',
  configAutoLockNormal: '裝置預設',
  configAutoLockSpeech: '朗讀時停用',
  configAutoLockDisable: '永遠停用',
  configHelpGroupTitle: '說明',
  configHelpTopic: '說明',
  configHelpFilename: 'en.html',
  configHelpCredits: 'Open Source Credits',
  configHelpAbout: '關於',
  configHelpPrivacy: 'Privacy Policy',
  configLocale: 'Language (語言)',
  configLocaleAuto: '預設',
  configLocaleDescription: '修改語言設定需要重新打開才能生效',
  configExpertGroupTitle: '專家',
  configExpert: '專家設定',
  configExpertDescription: '若您不清楚如何填寫，請將此處留空。錯誤設定會導致閱讀器無法使用。',

  buttonRemove: '刪除',
  buttonBack: '返回',
  buttonAdd: '新增檔案',
  buttonSettings: '設定',
  buttonContents: '目錄',
  buttonBookmark: '書籤',
  buttonSearch: '搜尋',
  buttonJump: '跳到',
  buttonSpeech: '開始朗讀',
  buttonSpeechStop: '停止朗讀',
  buttonContentsRefresh: '重新整理目錄',
  buttonSearchSubmit: '搜尋',
  buttonSearchClear: '清除搜尋結果',
  buttonBookmarkAdd: '新增書籤',

  colorHueRange: '色調',
  colorSaturationRange: '飽和',
  colorValueRange: '亮度',

  readFontFail: '無法開啟字型檔案\n您的瀏覽器可能不支援該字型檔案格式',
  listImportFail: '匯入文字檔時發生錯誤\n文字檔可能使用了不受支援的字元編碼',
  storageOpenFail: '無法存取装置的储存空间\ntReader 需要存取儲存空間以正常運作\n這可能是因為您開啟了瀏覽器的無痕（隱私）瀏覽模式或您的瀏覽器版本不受支援',
};
