// src\modules\appointments\infra\http\controllers\ProviderDayAvailabilityController.ts
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { day, month, year } = request.body;

    const listProviderDayAvailability = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const providers = await listProviderDayAvailability.execute({
      provider_id,
      day,
      month,
      year,
    });

    return response.json(providers);
  }
}
