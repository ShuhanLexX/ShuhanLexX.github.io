# Personal website content and source notes

Updated 7 September 2026. The deployed website is built from `site/`, a customized personal Jekyll site; root al-folio starter files are not the current runtime.

## Content maintenance

- `site/_data/scholar.yml`: English and Chinese profile, navigation, education, service, and research copy.
- `site/_data/works.yml`: ordered research outputs, bilingual descriptions, verified links, images, and review/publication status. This is the displayed source for the homepage, research, publications, and CV pages.
- `site/assets/ref.bib`: downloadable bibliography, kept aligned with the displayed records.
- Default entry `/` is English. Chinese pages live at `/zh/`; all four main routes have paired language links, `lang`, canonical, and `hreflang` metadata. No automatic language redirection.
- White is the default theme, including under an OS dark preference. A manual theme choice is saved under `shuhan-theme`.

## Verified bibliographic records

1. **GPLab**: [JASSS article](https://www.jasss.org/29/1/6.html), volume 29(1), article 6, 2026; DOI `10.18564/jasss.5933`. Authors Shuhan Zhang, Zifan Peng, Yinwang Ren. Figure downloaded from the original journal article during the earlier site update.
2. **生成式代理模型驱动的政策效果评估新范式：以舆论-经济系统模拟为例**: read the CNKI article detail on 7 September 2026, record `XTLL20260513008`. Authors **张书含、任银旺**. Online-first accepted manuscript in **系统工程理论与实践**, **14 May 2026, 13:49:29**. The displayed title corrects the earlier abbreviated version by restoring “模拟”. No DOI was displayed, so none is invented. The direct CNKI result URL is stored in the works data and bibliography.
3. **集体土地征收多元保障机制探讨**: read the CNKI article detail, **中国土地, 2022(05): 23–24**, sole author 张书含; DOI **10.13816/j.cnki.ISSN1002-9729.2022.05.07**. CNKI confirms the author's issue 5, superseding a secondary citation which incorrectly gave issue 4. Summary describes public interest, compensation, and public participation, matching the abstract.
4. **数据主权背景下个人信息跨境流动治理与完善**: read the CNKI article detail, record `HEBS202211008`, **哈尔滨学院学报, 2022, 43(11): 33–37**, sole author 张书含. The formal title includes “流动”. Replaced the earlier secondary bibliographic record with the exact CNKI result URL. No DOI was displayed.
5. **共同富裕的宪法向度及其立法实现**: collection title, year, and inclusion supplied by the author. A reliable public item URL has not been confirmed; there is no fabricated article or download link.
6. **Auto-ABM**: sole authorship, manuscript title, and “submitted to NeurIPS 2026 FAST Workshop; under external review” supplied by the author. This is labeled as a manuscript under review, never as an accepted main-conference publication. Main-conference CCF classifications are not transferred to workshop submissions.

## Research assets and software

- Policy evaluation figure: copied unchanged from the author's Desktop file `51aebdae-75de-40a7-97d0-581ec72bb85c.png` to `site/images/policy-evaluation-framework.png`.
- AutoABM preview: actual interface screenshot from [the project website](https://shuhanlexx.github.io/Auto-ABM/), source `/Auto-ABM/launch/v2/simulation-network.png`, saved as `site/images/autoabm-workbench.png`. No new generated research figures.
- AutoABM [repository](https://github.com/ShuhanLexX/Auto-ABM), [demo section](https://shuhanlexx.github.io/Auto-ABM/#demo), [website](https://shuhanlexx.github.io/Auto-ABM/), and [releases](https://github.com/ShuhanLexX/Auto-ABM/releases) verified. Release v1.0.0 provides a Windows x64 installer.
- Descriptions of traces, seeded simulation, reproduction packages, and ODD documentation derive from the public AutoABM README, not invented evaluation results.

## Translation and status conventions

- Name: Shuhan Zhang / 张书含. No inferred alternative Chinese spelling.
- Supervisor: Prof. Lianying Miao / 苗连营教授. Name spelling corroborated by Tsinghua Law School's bilingual World Forum on the Rule of Law programs.
- Education, service roles, and dates supplied by the author. “Researcher in Law & Computational Social Science” avoids retaining an outdated current doctoral-student status after the supplied June 2026 end date.
- Article titles are retained in their original publication language; reader-facing translated subtitles are editorial translations, not claims of an official translated edition.
- Journal review roles are displayed by full journal name; no unverified year-specific rankings or unsupported citation-impact claims are added.

## Verification notes

- GitHub Actions performs the actual Jekyll production build because Ruby/Bundler are not installed on this Windows host.
- The root al-folio style-contract check is not compatible with this migrated site's existing Gemfile: it expects an `al_math` pin. The check fails on that pre-existing template mismatch; unrelated dependencies were not changed.
- Main-page desktop/mobile rendering, original-image loading, paired language navigation, light/dark persistence, and publication filtering are checked in a real browser.
