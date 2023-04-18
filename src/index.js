/*
 *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.
 */

'use strict';

import ParseHTML from './ParseHTML';
import { parseHTMLString, isValidHTMLTag, fixAttributeQuotes } from './processor';

export default ParseHTML;
export { parseHTMLString, isValidHTMLTag, fixAttributeQuotes };