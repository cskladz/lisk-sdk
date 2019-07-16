/*
 * Copyright © 2018 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

'use strict';

const { checkIfTransactionIsInert } = require('./exceptions_handlers');
const { composeTransactionSteps } = require('./compose_transaction_steps');
const {
	validateTransactions,
	applyTransactions,
	checkPersistedTransactions,
	checkAllowedTransactions,
	undoTransactions,
	verifyTransactions,
	processSignature,
	applyGenesisTransactions,
} = require('./transactions_handlers');

const EVENT_UNCONFIRMED_TRANSACTION = 'unconfirmedTransaction';
const EVENT_MULTISIGNATURE_SIGNATURE = 'multisignature';

module.exports = {
	composeTransactionSteps,
	checkIfTransactionIsInert,
	validateTransactions,
	applyTransactions,
	applyGenesisTransactions,
	checkPersistedTransactions,
	checkAllowedTransactions,
	undoTransactions,
	verifyTransactions,
	processSignature,
	EVENT_UNCONFIRMED_TRANSACTION,
	EVENT_MULTISIGNATURE_SIGNATURE,
};
